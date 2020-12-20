<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" width="" max-width="344" :elevation="hover ? 4 : 0">
      <v-img v-bind:src="image.url" height="200px"></v-img>

      <v-card-title> {{ image.title }} </v-card-title>

      <v-card-subtitle> {{ image.subtitle }} </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "TCard",
  // "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
  props: {
    image: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
