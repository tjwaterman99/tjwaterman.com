<template>
    <div class="container mx-auto max-w-xl p-2">
        <div class="bg-cyan-800 p-2">
            <NuxtLink to="/" class="pb-4 text-white">Tom's Blog</NuxtLink>
        </div>
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

body {
    font-family: 'Merriweather'
}
</style>