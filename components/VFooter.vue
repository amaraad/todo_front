<script setup lang="ts">
</script>

<template>
  <footer>
    <div
        class="text-center md:text-left px-4 py-5 mx-auto flex flex-col sm:flex-row justify-between gap-2 sm:items-center bg-purple-100"
    >
      <div class="text-sm text-gray-600">
        <span class="font-medium text-gray-800">{{ appTitle }}</span>
        by
        <a
            href="https://github.com/amaraad"
            class="font-medium hover:underline text-gray-800"
        >
          Javascript course
        </a>.
      </div>
    </div>
  </footer>
</template>

<script setup>
const { appTitle } = useRuntimeConfig()
</script>