<template>
<div>
<ul>
    <li v-for="page in homepage.results" class="mt-2 flex justify-between">
        <NuxtLink :to="{name: 'articles-id-slug', params: {'id': format_block_id(page.id), slug: slugify(page.child_page.title)}}" class="hover:text-blue-400">{{ page.child_page.title }}</NuxtLink>
        <div class="border-b-2 border-dotted border-gray-600 grow mx-2 mb-1 pb-1"></div>
        <p>{{ formatDate(page.created_time) }}</p>
    </li>
</ul>
</div>
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

function format_block_id(block_id) {
    return block_id.replaceAll('-', '')
}

function slugify(input) {
    if (!input)
        return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();

    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}

const homepage = await client.blocks.children.list({
    block_id: '10d87f475d79800d88f5fc65da2df06b', page_size: 50
})

</script>