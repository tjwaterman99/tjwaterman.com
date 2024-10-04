<template>
    <div class="pb-12 mt-2 article">
        <div class="m-2 mt-4 flex flex-col md:flex-row justify-between md:items-end">
            <h1 class="font-extrabold text-2xl align-middle mb-2 md:mb-0">{{ page.child_page.title }}</h1>
            <div class="font-light text-gray-600 text-xl align-middle">{{ formatDate(page.created_time) }}</div>
        </div>
        <Block v-for="block of page_details.results" :block="block"/>
    </div>
</template>

<script setup>
import { Paragraph, BulletedListItem } from "#components";
import { Client } from '@notionhq/client';


const route = useRoute();
const block_id = route.params.id;
const client = new Client({
    auth: process.env.NOTION_API_KEY
})

const component_map = {
    'paragraph': Paragraph,
    'bulleted_list_item': BulletedListItem,
}

function formatDate(ts) {
    var d = new Date(ts)
    return d.toDateString()
}

const page_details = await client.blocks.children.list({
    block_id: block_id, page_size: 50
})

const page = await client.blocks.retrieve({block_id: block_id})


</script>

<style>

</style>