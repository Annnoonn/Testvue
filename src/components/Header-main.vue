<script setup lang="ts">
import Button from './Button-main-head.vue'
import Icon from './Icon-main-header.vue'
import Search from './Search-button-main.vue'
import Close from './close-modal-icon.vue'
import imagePath from '@/assets/images/modal_background.jpg'
import FormInput from './form_input.vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import LoginButton from './login-button.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const isElementHovered = ref(false)

function handleMouseOver() {
  isElementHovered.value = true
}

function handleMouseLeave() {
  isElementHovered.value = false
}

/**
 * On Click outside
 */
const target = ref(null)
onClickOutside(target, (event) => {
  closeModal()
})
</script>

<template>
  <header class="relative bg-[#1d1c1c] p-3 text-4xl z-10">
    <div class="flex justify-start items-center">
      <RouterLink to="/">
        <Icon class="ml-10 mr-10" />
      </RouterLink>
      <div class="flex justify-start w-300">
        <Button
          button-text="MENU"
          class="relative"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
        />

        <Button button-text="NOS OBJECTIFS" />

        <RouterLink to="/actus">
          <Button button-text="ACTUS" />
        </RouterLink>

        <RouterLink to="/quiz">
          <Button button-text="FAIRE LE QUIZ " />
        </RouterLink>
      </div>

      <div class="flex">
        <Button @click="openModal" button-text="Connectez-vous" class="bg-red-700" />
        <Search />
      </div>
    </div>

    <div
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      v-if="isElementHovered"
      class="flex flex-col absolute top-1.5 left-5 text-lg bg-[#1d1c1c] w-150 h-55 text-white ml-25 z-50 mt-14 pl-2"
    >
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">
        Les projets
      </button>
      <RouterLink to="/la-promo">
        <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">
          La promo
        </button>
      </RouterLink>
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">
        Les intervenants
      </button>
      <button class="mt-2 hover:bg-[#252725] duration-200 w-60 p-2 rd-5 cursor-pointer">
        Nous contacter
      </button>
    </div>

    <div
      v-if="isModalOpen"
      class="z-index-0 flex flex-col fixed top-1/8 left-1/6 w-280 h-157.5 rd-8"
      :style="{ backgroundImage: `url(${imagePath})` }"
      ref="target"
    >
      <div
        class="z-index-1 absolute inset-0 bg-gradient-to-r from-#19272E to-transparent pointer-events-none rd-10"
      ></div>

      <div class="z-20 flex flex-col h-50">
        <div class="flex justify-between z-20">
          <a href="/" class="z-20 text-blue text-4 pl-50 pt-2">Home</a>
          <Close @click="closeModal()" class="relative pt-3 pr-3" />
        </div>

        <div class="flex flex-col ml-15">
          <h2 class="text-gray text-5">START FOR FREE</h2>
          <h1 class="text-white text-10 mb-5">Create new account</h1>
          <h3 class="text-gray text-4">
            Already member ? <a class="text-blue" href="/quiz">Login</a>
          </h3>
        </div>
      </div>

      <div class="ml-15 z-20">
        <FormInput class="mt-0" placeholder="Full name" />
        <FormInput placeholder="Email" type="email" />
        <FormInput placeholder="Password" type="password" />

        <div class="flex flex-col">
          <div class="flex text-lg mt-5">
            <LoginButton class="mr-3" placeholder="Login with Google" />
            <LoginButton placeholder="Login with Facebook" />
          </div>
          <LoginButton class="mt-5 ml-25 rd-10 bg-green text-5" placeholder="Create Account" />
        </div>
      </div>
    </div>
  </header>
</template>
