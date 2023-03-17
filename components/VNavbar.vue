<template>
    <div class="bg-purple-700">
    <nav
        class="
        container
        px-3
        py-3
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
              type="button"
              class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="text-gray-100 hover:text-purple-400">
          <NuxtLink
              to="/"
              class="
            font-bold
            text-gray-100
            hover:text-purple-400
          "
          >
            Нүүр</NuxtLink>
        </li>
        <li class="text-gray-100 hover:text-purple-400">
          <NuxtLink
              to="/type/list"
              class="
            font-bold
            text-gray-100
            hover:text-purple-400
          "
          >
          Миний ажлын төрлүүд
          </NuxtLink>
        </li>
          <li class="text-gray-100 hover:text-purple-400">
            <NuxtLink
                to="/type/add"
                class="
            font-bold
            text-gray-100
            hover:text-purple-400
          "
            >
              Ажлын төрөл бүртгэх
            </NuxtLink>
          </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  data() {
    const { appTitle } = useRuntimeConfig()
    return {
      title: appTitle
    }
  }
};
</script>