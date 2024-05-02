<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface MaisonRecords {
  Adresse: string
  ImageMaison: string
  NomMaison: string
  Nombre_de_chambre: number
  Prix: number
  collectionId: string
  collectionName: string
  created: string
  id: string
  nombre_de_salle_de_bain: number
  superficie: string
  updated: string
}

const maisonsListe: MaisonRecords[] = [
  {
    Adresse: '2 rue texas',
    ImageMaison: 'r_architecture_2g_dwl_iim3_uw_unsplash_VUl5gN4C47.jpg',
    NomMaison: 'Maisonplage',
    Nombre_de_chambre: 6,
    Prix: 140000,
    collectionId: 'kppejofyh74z92v',
    collectionName: 'Maison',
    created: '2024-04-29 13:16:36.614Z',
    id: 'dmiptr8vj7q3elm',
    nombre_de_salle_de_bain: 4,
    superficie: '70',
    updated: '2024-05-02 08:28:05.083Z'
  },
  {
    Adresse: '1 rue texas',
    ImageMaison: 'zac_gudakov_5_qlcohw_vnd_q_unsplash_iGjLcNgFie.jpg',
    NomMaison: 'Maison1',
    Nombre_de_chambre: 6,
    Prix: 500000,
    collectionId: 'kppejofyh74z92v',
    collectionName: 'Maison',
    created: '2024-04-29 13:17:31.342Z',
    id: '5n764sjv7jbxqu6',
    nombre_de_salle_de_bain: 3,
    superficie: '60 ',
    updated: '2024-05-02 08:27:30.562Z'
  }
]

console.log(maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
