<script setup lang="ts">
import Button from './Button-main-head.vue'
import Icon from './Icon-main-header.vue'
import Search from './Search-button-main.vue'
import { ref } from 'vue'

const isElementHovered = ref(false)

function handleMouseOver() {
  isElementHovered.value = true
}

function handleMouseLeave() {
  isElementHovered.value = false
}


</script>

<template>
  <header class="relative bg-[#1d1c1c] p-3 flex justify-between  text-4xl z-10">
    
    
    <div class="flex justify-start items-center">
      <Icon class="ml-10" />
    <div class="flex justify-start w-300">
      <Button
        button-text="MENU"
        class="relative"
        @mouseover="handleMouseOver" />

      <Button button-text="NOS OBJECTIFS" />
      <Button button-text="ACTUS" />
      <Button button-text="FAIRE LE QUIZ " />

    </div>
    
  </div>
  <Search />

    <div
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      v-if="isElementHovered"
      class="flex flex-col absolute top-0 left-0 text-lg bg-[#1d1c1c] w-150 h-55 text-white ml-25 z-50 mt-14 rounded-3 pl-2 "
    >
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">Les projets</button>
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">La promo</button>
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">Les intervenants</button>
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">Nous contacter</button>

    </div>
  </header>
</template>
