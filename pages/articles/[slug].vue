<template>
    <div class="pb-12 mt-2">
        <div class="bg-gray-100 p-2">
            <NuxtLink to="/" class="pb-4">Home</NuxtLink>
        </div>
        <Block class="px-2" v-for="block of page_details.results" :block="block"/>
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