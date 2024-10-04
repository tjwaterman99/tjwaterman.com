import { config } from 'dotenv';
import * as fs from 'fs/promises'
import { Client } from '@notionhq/client';

config()

let outputdir = '.site'
let rootpage = '10d87f475d79800d88f5fc65da2df06b'

interface Manifest {
    root_page_id: string
}

const client = new Client({
    auth: process.env.NOTION_API_KEY
})

async function savePage(block_id: string, content: string) {
    let outpath = outputdir + '/' + block_id + '.json'
    fs.writeFile(outpath, content)
}

console.log("Starting")

await fs.mkdir(outputdir).catch( (err) => console.log("Error making .site dir. Skipping."))

client.blocks.children.list({block_id: rootpage, page_size: 100}).then( (resp) => {
    console.log("Found", resp.results.length, "articles on root page", rootpage)
    savePage(rootpage, JSON.stringify(resp))
    return resp
}).then( (resp) => {
    for (let article_page of resp.results) {
        console.log("Fetching article page", article_page.id)
        client.blocks.children.list({block_id: article_page.id}).then( res => {
            savePage(article_page.id, JSON.stringify(res))
            console.log("Saved article page", article_page.id)
        })
    }
})