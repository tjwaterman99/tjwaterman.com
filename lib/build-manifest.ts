import * as fs from 'fs/promises'
import slugify from '../utils/slugify'

interface Article {
    title: string
    slug: string
    id: string
    created_time: string
}

interface Manifest {
    articles: Article[]
    root_page_id: string
}

let manifest = {
    articles: Array(0),
    root_page_id: '10d87f475d79800d88f5fc65da2df06b'
}

let root_page_content = await fs.readFile('.site/' + manifest.root_page_id + '.json', {encoding: 'utf8'})

for (let details of JSON.parse(root_page_content).results) {
    let article = {
        id: details.id,
        created_time: details.created_time,
        slug: slugify(details.child_page.title),
        title: details.child_page.title

    }
    manifest.articles.push(article)
}

fs.writeFile('.site/manifest.json', JSON.stringify(manifest))