<script setup lang="ts">
import Button from "./Button-main-head.vue"
import Icon from "./Icon-main-header.vue"
import Search from "./Search-button-main.vue"
import {ref} from 'vue'






const isElementHovered = ref(false);

function handleMouseOver(){
    isElementHovered.value = true;
}


function handleMouseLeave(){
isElementHovered.value=false

  }


function test(){
  console.log("aazaaz")
}


</script>

<template>
  <header class="relative bg-[#1d1c1c]  p-3 flex justify-start wfont-bold text-4xl z-10 " >
    <Icon class="ml-30  "/>
    <div class="flex justify-start w-300">
    <Button button-text="MENU" class="relative" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" />
    <Button button-text="NOS OBJECTIFS"  />
    <Button button-text="ACTUS"/>   
    <Button button-text="FAIRE LE QUIZ " @click="test"/>   
  </div>     
    <Search />

    <div  @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" v-if="isElementHovered" class="fixed bg-red w-150 h-40 text-white ml-50 z-50 mt-12   " >
  <div  class="mt-2 hover:bg-[#252725] duration-200 w-60 pl-3 rd-5 cursor-pointer">Les projets</div>
  <div  class="mt-2 hover:bg-[#252725] duration-200 w-60 pl-3 rd-5 cursor-pointer">La promo</div>
  <div  class="mt-2 hover:bg-[#²²²252725] duration-200 w-60 pl-3 rd-5 cursor-pointer">Les intervenants</div>
  <div  class="mt-2 hover:bg-[#252725] duration-200 w-60 pl-3 rd-5 cursor-pointer">Nous contacter</div>
  </div>
  
  </header>

  
</template>


