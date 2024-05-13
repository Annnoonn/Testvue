<script setup lang="ts">
defineProps<{
  placeholder: string
  type?: 'email' | 'password'
}>()
</script>

<template>
  <input
    class="text-white text-1 outline-none rd-1.5 hover:opacity-80 duration-200"
    :placeholder="placeholder"
    :type="type || 'text'"
  />
</template>
