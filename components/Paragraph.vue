<template>
    <div>
    <div v-for="text of paragraph" class="pt-1">
        <div v-for="content of text" class="leading-relaxed">
            {{ content.plain_text }}
        </div>
    </div>
    </div>
</template>

<script setup>
let { block } = defineProps(['block'])
let paragraph = block.paragraph
</script>