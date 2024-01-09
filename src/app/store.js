import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../feautres/user/userSlice";
import movieReducer from '../feautres/Movie/MovieSlice'


export default configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});



