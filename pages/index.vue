<template>
<h1>Tom's Blog</h1>
<ul>
    <li v-for="page in homepage.results">
        <NuxtLink :to="{name: 'articles-slug', params: {'slug': page.id}}">{{ page.child_page }}</NuxtLink>
    </li>
</ul>
</template>

<script setup>
import { Client } from '@notionhq/client';
const client = new Client({
    auth: process.env.NOTION_API_KEY
})

const homepage = await client.blocks.children.list({
    block_id: '4dd05d0e0ea6432cbeac0ddeaf4c0e92', page_size: 50
})
</script>