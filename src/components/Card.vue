<template>
  <div class="card" :style="position">
    <img :src="'/src/assets/card/' + name + '.png'" alt="" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  name: string;
  index: number;
}>();
const distanceX = 150;
const distanceY = 50;

const position = computed(() => {
  return {
    top: (props.index % 8) * distanceY + "px",
    left: (props.index % 8) * distanceX + "px",
  };
});
</script>
<style lang="scss" scoped>
.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 137px;
  height: 189px;
  color: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
