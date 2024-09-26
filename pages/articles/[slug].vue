<template>
    <p></p>
    <p v-for="block of page_details.results">{{ block }}</p>
</template>

<script setup>
const route = useRoute();
const block_id = route.params.slug;
import { Client } from '@notionhq/client';
const client = new Client({
    auth: process.env.NOTION_API_KEY
})

const page_details = await client.blocks.children.list({
    block_id: block_id, page_size: 50
})
</script>