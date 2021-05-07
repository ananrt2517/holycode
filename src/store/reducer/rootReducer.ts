import { combineReducers } from "redux";

import catReducer from "./catReducer";

const rootReducer = combineReducers({
  cat: catReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
