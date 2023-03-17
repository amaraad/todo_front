<template>

  <div class="relative overflow-x-auto">
    <div v-if="error">
      {{ error }}
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Ажлын нэр
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              v-for="row in data" :key="row"
        >
          {{row.name}}
        </th>

      </tr>

      </tbody>
    </table>
  </div>

</template>

<script setup>
const { appTitle, directusUrl } = useRuntimeConfig()
definePageMeta({
  layout: 'landing',
})
useHead({
  title: appTitle,
})
const { data, error, pending } = await useFetch(directusUrl + '/items/type')

</script>

