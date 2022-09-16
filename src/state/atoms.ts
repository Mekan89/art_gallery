import { atom } from "recoil";

export const slide = atom({
  key: "slideId",
  default: 0,
});

export const modal = atom({
  key: "modalId",
  default: false,
});
