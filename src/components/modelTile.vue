<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="mt-10 flex flex-col items-center hover:scale-150 duration-100">
    <h1 class="bg-secondary w-68.7 text-center font-bold">{{ title }}</h1>
    <div class="">
      <img class="imgSlide" src="../assets/images/placeholder.png" />
      <p class="text-center w-68.7 bg-gray bg-opacity-100">{{ description }}</p>
    </div>
  </section>
</template>
