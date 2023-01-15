import { onMounted, reactive } from "vue";

export enum CardName {
  CLUB = "club",
  DIAMOND = "diamond",
  HEART = "heart",
  SPADE = "spade",
}

export const randomArr = (arr: string[]) => {
  arr.sort(function () {
    return 0.5 - Math.random();
  });
};

// 初始化52張牌
export const initCards = (arr: string[]) => {
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
      arr.push(color + "-" + i);
      i++;
    }
  });
};

const cards = reactive<string[]>([]);

export const useCards = () => {
  onMounted(() => {
    initCards(cards);
    randomArr(cards);
  });

  return cards;
};
