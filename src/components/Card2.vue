<template>
  <div
    class="card"
    ref="el"
    :style="[image, draggableStyle]"
    :class="{
      'pointer-unset': isCanMove,
      'z-index-999': isDragging,
      transition: isUseTransition,
    }"
  ></div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useDraggable } from "@vueuse/core";

const moveTime = ref(300);
const delayTime = ref(100);
const moveTimeS = `${moveTime.value / 1000}s`;

const props = defineProps<{
  name: string;
  index: number;
  cards: string[];
}>();

const index = ref(props.index);

const isUseTransition = ref(false);

const el = ref<HTMLElement | null>(null);

const isCanChange = ref(false);

const distanceX = 150;

const distanceY = 50;

const image = "background-image: url(/src/assets/card/" + props.name + ".png);";

const onEnd = () => {
  index.value = 52;
  setPosition();
};

const {
  position,
  style: draggableStyle,
  isDragging,
} = useDraggable(el, {
  initialValue: {
    x: 100,
    y: 100,
  },
  onEnd,
});

const isCanMove = computed(() => {
  if (isUseTransition.value) {
    return false;
  }
  return props.cards[index.value + 8] == undefined;
});

const setPosition = () => {
  isUseTransition.value = true;
  position.value = {
    x: (index.value % 8) * distanceX,
    y: parseInt(`${index.value / 8}`) * distanceY,
  };
};

const closeTransition = () => {
  setTimeout(() => {
    isUseTransition.value = false;
  }, moveTime.value);
};

onMounted(() => {
  setTimeout(() => {
    setPosition();

    closeTransition();
  }, delayTime.value * index.value);
});
</script>
<style lang="scss" scoped>
.card {
  position: fixed;
  width: 137px;
  height: 185px;
  user-select: none;
  touch-action: none;
  // cursor: move;
  pointer-events: none;
  color: black;
  background-size: contain;
  &:hover {
    box-shadow: 10px 5px 5px black;
  }
}

.pointer-unset {
  pointer-events: unset;
}

.z-index-999 {
  z-index: 999;
}

.transition {
  transition: all v-bind(moveTimeS);
}
</style>
