<template>
    <Card v-for="(name, index) of cards" :index="index" :name="name" />
    <!-- <Card :index="0" name="club-1" /> -->
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { useCards } from "@/modules/game";
const cards = useCards();
</script>
<style lang="scss" scoped>
</style>
