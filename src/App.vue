<script setup lang="ts">
import Header from './components/Header-main.vue'
import Footer from './components/Footer-main.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <Header />
    <RouterView class="flex-1"></RouterView>
    <Footer />
  </div>
</template>

<style></style>
