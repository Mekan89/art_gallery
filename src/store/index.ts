import { configureStore } from "@reduxjs/toolkit";

import slidesReducer from "./slidesSlice";

const store = configureStore({
  reducer: {
    slideshow: slidesReducer,
    // lightbox: lightboxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
