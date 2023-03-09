<template>
  <div class="text-center p-20 mt-10">
    <span>Hello Nuxt.js with Tailwind.</span>
  </div>
</template>

<script setup>

const { appTitle } = useRuntimeConfig()
definePageMeta({
  layout: 'landing',
})
useHead({
  title: appTitle,
})
</script>
