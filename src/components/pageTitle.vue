<script setup lang="ts">
defineProps<{
  titleText: string
  titleSubText: string
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-center mt-20 mb-1 text-4xl">{{titleText}}</h1>
    <div class="bg-black h-1 w-100"></div>
    <h2 class="text-3xl mt-1">{{titleSubText}}</h2>
  </div>

</template>
