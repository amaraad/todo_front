<template>

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

