<template>
<div>
    <component :is="loadComponent(block.type)" :block="block"></component>
</div>
</template>

<script setup>
import { Paragraph, BulletedListItem, ChildPage } from "#components";
let { block } = defineProps(['block']);
const route = useRoute();
const block_id = route.params.slug;

const component_map = {
    'paragraph': Paragraph,
    'bulleted_list_item': BulletedListItem,
    'child_page': ChildPage
}

function loadComponent(type) {
    let c = component_map[type];
    if (!c) {
        throw "Undefined component type: " + type
    }
    return c
}
</script>