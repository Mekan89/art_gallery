import { data } from "data/data";
import { Gallery } from "helper/interface";
import { atom } from "recoil";

type SlidesSlice = {
  slides: Gallery[];
  direction: number;
  currentSlideIndex: number;
  isPlaying: boolean;
};

export const slide = atom({
  key: "slide",
  default: {
    slides: data,
    direction: 0,
    currentSlideIndex: 0,
    isPlaying: false,
  } as SlidesSlice,
});

// const slidesSlice = createSlice({
//   name: "slideshow",
//   initialState: initialSlidesState,
//   reducers: {
//     setCurrentSlide: (state, action: PayloadAction<number>) => {
//       state.currentSlideIndex = action.payload;
//     },
//     paginate: (state, action: PayloadAction<number>) => {
//       const direction = action.payload;
//       if (direction > 0) {
//         state.currentSlideIndex = (state.currentSlideIndex + 1) % state.slides.length;
//       } else {
//         state.currentSlideIndex = (state.currentSlideIndex - 1 + state.slides.length) % state.slides.length;
//       }
//       state.direction = direction;
//     },
//     toggleIsPlaying: state => {
//       state.isPlaying = !state.isPlaying;
//     },
//     resetSlider: state => {
//       state.currentSlideIndex = 0;
//       state.direction = 0;
//       state.isPlaying = false;
//     },
//   },
// });
