<script setup lang="ts">
defineProps<{
  buttonText: string
}>()
</script>

<template>
  <button class="p-2 hover:bg-[#252725] text-white bg-[#1d1c1c] rd-5 w-50 text-xl ml-5 duration-200">
    {{ buttonText }}
  </button>
</template>
