<template>
    <div>
        <NuxtLink to="/" class="pb-4">Home</NuxtLink>
        <component :is="loadComponent(block.type)" v-for="block of page_details.results" :block="block"></component>
    </div>
</template>

<script setup>
import { Paragraph, BulletedListItem } from "#components";
import { Client } from '@notionhq/client';


const route = useRoute();
const block_id = route.params.slug;
const client = new Client({
    auth: process.env.NOTION_API_KEY
})

const component_map = {
    'paragraph': Paragraph,
    'bulleted_list_item': BulletedListItem,
}


function loadComponent(type) {
    let c = component_map[type];
    if (!c) {
        throw "Undefined component type: " + type
    }
    return c
}

const page_details = await client.blocks.children.list({
    block_id: block_id, page_size: 50
})


</script>