<template>
  <div class="container">
    <Card v-for="(_, index) of 9" :index="index" name="spade-1" />
  </div>
</template>
<script lang="ts" setup>
import Card from "@/components/Card.vue";
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
