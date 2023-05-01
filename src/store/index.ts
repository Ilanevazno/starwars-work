import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mainReducer from "./main/slice";
import characterDetailsReducer from "./characterDetails/slice";

const store = configureStore({
  reducer: {
    main: mainReducer,
    characterDetails: characterDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
