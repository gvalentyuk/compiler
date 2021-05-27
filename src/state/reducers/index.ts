import { combineReducers } from "redux";
import cellReducer from "./cellReducer";

export const reducers = combineReducers({
  cells: cellReducer,
});

export type RootState = ReturnType<typeof reducers>;
