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
      <div v-if="loading" class="flex items-center justify-center flex-1">
        <VLoading class="w-24 h-24 text-primary-600" />
      </div>

      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="row in todo_types" :key="row">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{row.name}}
        </th>

      </tr>

      </tbody>
    </table>
  </div>

</template>

<script setup>
const { appTitle} = useRuntimeConfig()
definePageMeta({
  layout: 'landing',
})
const { $directus } = useNuxtApp()
const todo_types = ref([]);
const loading = ref(false);
async function fetchTodoTypelist() {
  loading.value = true
  try {
    const { data } = await $directus.items('type').readByQuery({
      filter: {
      }
    })
    todo_types.value = data
    // console.log(locations)
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
onMounted(fetchTodoTypelist);


</script>

