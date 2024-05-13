<script setup lang="ts">
defineProps<{
  placeholder: string
}>()
</script>

<template>
  <button
    class="text-white te w-50 bg-(#DADADA opacity-40) opacity-50 hover:opacity-100 rd-1.5 p-1 duration-200"
  >
    {{ placeholder }}
  </button>
</template>
