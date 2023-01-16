<template>
  <UseDraggable
    class="card"
    :initial-value="initialValue"
    :prevent-default="true"
    @end="end"
  >
    <img :src="'/src/assets/card/' + name + '.png'" alt="" />
  </UseDraggable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { UseDraggable } from "@vueuse/components";
import type { Position } from "@vueuse/core";

const props = defineProps<{
  name: string;
  index: number;
}>();
const distanceX = 150;
const distanceY = 50;
const initialValue = {
  x: (props.index % 8) * distanceX,
  y: parseInt(`${props.index / 8}`) * distanceY,
};

const end = (position: Position) => {
  console.log("end");
};
</script>
<style lang="scss" scoped>
.card {
  position: fixed;
  width: 137px;
  height: 189px;
  color: black;
  // transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
