<template>
<h1 class="font-bold text-3xl mb-4">Tom's Blog</h1>
<ul>
    <li v-for="page in homepage.results" class="mt-2 flex justify-between">
        <NuxtLink :to="{name: 'articles-slug', params: {'slug': page.id}}" class="hover:text-blue-400">{{ page.child_page.title }}</NuxtLink>
        <p>{{ formatDate(page.created_time) }}</p>

    </li>
</ul>
</template>

<script setup>
import { Client } from '@notionhq/client';

const client = new Client({
    auth: process.env.NOTION_API_KEY
})

function formatDate(ts) {
    var d = new Date(ts)
    return d.toDateString()
}

const homepage = await client.blocks.children.list({
    block_id: '10d87f475d79800d88f5fc65da2df06b', page_size: 50
})
</script>