<template>
<div class="p-2">
    <ul>
        <li v-for="article in manifest.articles" class="mt-2 flex justify-between">
            <NuxtLink :to="{name: 'articles-slug', params: {slug: article.slug}}" class="hover:text-blue-400">{{ article.title }}</NuxtLink>
            <div class="border-b-2 border-dotted border-gray-600 mb-1 pb-1"></div>
            <p>{{ formatDate(article.created_time) }}</p>
        </li>
    </ul>
</div>
</template>

<script setup>
function formatDate(ts) {
    var d = new Date(ts)
    return d.toDateString()
}

import manifest from '@/.site/manifest.json'
</script>