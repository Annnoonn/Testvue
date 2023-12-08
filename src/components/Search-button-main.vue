<script setup lang="ts">
import {ref} from 'vue'

let searchQuery = ref('');

function test(){
  console.log(searchQuery.value)

}

    </script>
    
    <template>
      <i class="i-material-symbols-light-search absolute right-120 text-xl mt-3 color-white"></i>
      <input placeholder="Rechercher..." class="hover:bg-[#252725] text-white bg-[#252725] rd-5 w-80 text-xl pl-10  mt-0.4 ml-5 duration-200 h-11 " v-model="searchQuery" @keydown.enter="test">
      
    
    </template>
    
    <style>

  </style>