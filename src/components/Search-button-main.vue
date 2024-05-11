<script setup lang="ts">
import { ref } from 'vue'

let searchQuery = ref('')

function test() {
  console.log(searchQuery.value)
}
</script>

<template>
  <button class="hover:bg-[#252725] text-white bg-[#252725] rd-5 w-80 text-xl pl-5 mr-50 mt-0.4 ml-5 duration-200 h-11 flex items-center cursor-default">
    <i class="i-material-symbols-light-search text-xl "></i>
    <input
      placeholder="Rechercher..."
      class="bg-transparent text-white w-full outline-none ml-2"
      v-model="searchQuery"
      @keydown.enter="test"
    />
  </button>
</template>


<style></style>
