<template>
    <div class="p-2">
        <div class="mt-4 flex flex-col md:flex-row justify-between md:items-end mb-6">
            <h1 class="font-extrabold text-2xl align-middle mb-2 md:mb-0">{{ metadata.title }}</h1>
            <div class="font-light text-gray-600 text-xl align-middle">{{ formatDate(metadata.created_time) }}</div>
        </div>
        <Block v-for="block of page.results" :block="block"/>
    </div>
</template>

<script setup>
import { Paragraph, BulletedListItem } from "#components";
import manifest from '@/.site/manifest.json'
import * as fs from 'fs/promises'
import path from 'path'

const route = useRoute();
const slug = route.params.slug

const component_map = {
    'paragraph': Paragraph,
    'bulleted_list_item': BulletedListItem,
}

function formatDate(ts) {
    var d = new Date(ts)
    return d.toDateString()
}

function getArticleMetadataBySlug(slug) {
    for (let article of manifest.articles) {
    if (article.slug == slug) {
        return article
    }
}    
}

let metadata = getArticleMetadataBySlug(slug)

let page = JSON.parse(await fs.readFile(path.join(`.site/${metadata.id}.json`), {encoding: 'utf8'}))
</script>
