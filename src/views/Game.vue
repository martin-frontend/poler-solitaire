<template>
  <div class="container">
    <Card v-for="(name, index) of cards" :index="index" :name="name" />
  </div>
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { useCards } from "@/modules/game";

const cards = useCards();
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
