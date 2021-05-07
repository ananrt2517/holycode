import * as actionTypes from "../actions/types";
import { ICats } from "../types";

export interface IRootState {
  data: ICats[];
  error: any;
}

const initialState = {
  data: [],
  error: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.REQUEST_CATS_SUCCESS:
      const { payload } = action.payload;
      return {
        ...state,
        data: payload,
      };

    case actionTypes.REQUEST_CATS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.REMOVE_CAT:
      const filteredList = state.data.filter(
        (cat: ICats) => cat.id !== action.id
      );
      return {
        ...state,
        data: filteredList,
      };
  }
  return state;
};

export default reducer;
