<template>
    <div v-for="text of paragraph" class="pt-1">
        <p v-for="content of text">
            {{ content.plain_text }}
        </p>
    </div>

</template>

<script setup>
let { block } = defineProps(['block'])
let paragraph = block.paragraph
console.log(paragraph)
</script>