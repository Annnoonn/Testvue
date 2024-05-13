<script setup lang="ts">
import Icon from './Icon-main-header.vue'

const reloadPage = () => {
  location.reload()
}
</script>

<template>
  <footer class="bg-primary mt-25 w-full">
    <div class="flex p-3 justify-between">
      <Icon @click="reloadPage" class="object-cover w-10 h-full" />
      <section class="flex justify-start">
        <a
          class="hover:opacity-10 duration-200 object-cover w-10 h-full mr-5"
          href="https://www.linkedin.com/in/pbsi-actu-017252298/"
          target="_blank"
        >
          <img class="logo" src="../assets/images/logo_linkedin.png" />
        </a>
        <a
          class="hover:opacity-10 duration-200 object-cover w-10 h-full"
          href="https://instagram.com/pbsi_actu?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
          target="_blank"
        >
          <img class="logo" src="../assets/images/logo_Insta_White.png" />
        </a>
      </section>
    </div>
  </footer>
</template>
