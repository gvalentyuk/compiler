import { combineReducers } from "redux";
import cellReducer from "./cellReducer";
import bundleReducer from './bundleReducer';

export const reducers = combineReducers({
  cells: cellReducer,
  bundles: bundleReducer
});

export type RootState = ReturnType<typeof reducers>;
