<template>
    <div class="p-2 mb-16">
        <div class="my-6">
            <h1 class="font-extrabold text-3xl align-middle mb-4">{{ metadata.title }}</h1>
            <div class="font-light text-gray-600 text-xl align-middle">{{ formatDate(metadata.created_time) }}</div>
        </div>
        <Block v-for="block of page.results" :block="block" class="text-lg" />
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
