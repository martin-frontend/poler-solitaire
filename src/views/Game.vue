<template>
  <!-- <Card v-for="(name, index) of cards" :index="index" :name="name" /> -->
  <template v-if="!renderComponent">
    <Card2 v-for="(name, index) of cards" :index="index" :name="name" :cards="cards" />
  </template>
  <button @click="startGame">restart</button>
  <!-- <Card :index="0" name="club-1" /> -->
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";
import Card2 from "@/components/Card2.vue";
import { useCards, startGame, randomCards } from "@/modules/game";
const { cards, renderComponent, cardsMartix } = useCards();
</script>
<style lang="scss" scoped></style>
