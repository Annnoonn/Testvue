<script setup lang="ts">
import pageTitle from './pageTitle.vue'
import Tile from './modelTile.vue'
</script>

<template>
  <pageTitle titleText="BIENVENUE" titleSubText="Explorez les environs" />

  <section class="flex flex-col">
    <section class="flex justify-evenly">
      <Tile
        title="Découvrez le PBA"
        description="Bienvenue sur le site de la classe SIO du Pôle BTS alternance, n'hésitez pas à explorer ce site crée et designé par des élèves de cette classe"
      />
      <Tile
        title="Dernières news"
        description="Super, la nouvelle collection Nike est de sortie ! Amusez vous bien avec les superbes chaussures Nike "
      />
      <Tile
        title="Élève de la semaine"
        description="Noan est vraiment trop beau wtf il est le meileur élève sans aucune hésitations"
      />
    </section>
    <section class="flex justify-evenly">
      <Tile
        title="Découvrez le PBA"
        description="Bienvenue sur le site de la classe SIO du Pôle BTS alternance, n'hésitez pas à explorer ce site crée et designé par des élèves de cette classe"
      />
      <Tile
        title="Dernières news"
        description="Super, la nouvelle collection Nike est de sortie ! Amusez vous bien avec les superbes chaussures Nike "
      />
      <Tile
        title="Élève de la semaine"
        description="Noan est vraiment trop beau wtf il est le meileur élève sans aucune hésitations"
      />
    </section>
  </section>
</template>
