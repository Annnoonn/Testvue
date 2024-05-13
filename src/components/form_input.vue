<script setup lang="ts">
import Separator from './formInput_separator.vue'
import InputStyle from './input_style.vue'

defineProps<{
  placeholder: string
  type?: 'email' | 'password' // union typescript literal
}>()
</script>

<template>
  <div>
    <InputStyle class="bg-transparent w-70 text-4" :placeholder="placeholder" :type="type" />
    <Separator class="mb-8" />
  </div>
</template>
