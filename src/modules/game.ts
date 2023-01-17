import { onMounted, reactive, ref, nextTick } from "vue";

export enum CardName {
  CLUB = "club",
  DIAMOND = "diamond",
  HEART = "heart",
  SPADE = "spade",
}

const renderComponent = ref(false);

const cards = reactive<string[]>([]);
const cardsMartix = reactive<string[][]>([[],[],[],[],[],[],[],[]]);

// 初始化52張牌
const initCards = () => {
  cards.length = 0;
  // 花色
  const colors = [
    CardName.SPADE,
    CardName.HEART,
    CardName.DIAMOND,
    CardName.CLUB,
  ];
  // 每個花色的數量
  const count = 13;
  colors.forEach((color) => {
    let i = 1;
    while (i <= count) {
      cards.push(color + "-" + i);
      i++;
    }
  });
  randomCards();

  cards.forEach((card, index) => {
    cardsMartix[index % 8].push(card);
  });
};

export const randomCards = () => {
  cards.sort(function () {
    return 0.5 - Math.random();
  });
};

export const startGame = async () => {
  renderComponent.value = true;
  await nextTick();
  initCards();
  renderComponent.value = false;
};

export const useCards = () => {
  onMounted(() => {
    startGame();
  });

  return { cards, renderComponent, cardsMartix };
};
