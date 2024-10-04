<template>
    <div class="container mx-auto max-w-2xl">
        <div class="bg-cyan-800 p-2">
            <NuxtLink to="/" class="text-white text-xl px-2">Tom's Blog</NuxtLink>
        </div>
        <div class="content bg-gray-100 px-2">
        <slot />
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

body {
    font-family: 'Merriweather'
}
</style>