import { configureStore } from "@reduxjs/toolkit";
import PostService from "../services/post.service";
const store = configureStore({
  reducer: { [PostService.reducerPath]: PostService.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostService.middleware),
});

export default store;
