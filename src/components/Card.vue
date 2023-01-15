<template>
  <div @mousedown="mousedown($event, index)" class="card" :style="position">
    <img :src="'/src/assets/card/' + name + '.png'" alt="" />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
const props = defineProps<{
  name: string;
  index: number;
}>();
const distanceX = 150;
const distanceY = 50;
const x = ref<number>(props.index % 8);
const y = ref<number>(parseInt(`${props.index / 8}`));

const position = computed(() => {
  return {
    top: y.value * distanceY + "px",
    left: x.value * distanceX + "px",
  };
});

const mousedown = (e: Event, index: number) => {
  console.warn('123',e);
  
};
</script>
<style lang="scss" scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 137px;
  height: 189px;
  color: black;
  transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
