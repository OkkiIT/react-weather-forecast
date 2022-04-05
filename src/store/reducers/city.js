import { ADD_CITY } from "../actionTypes";

const initialState = {
  city: "",
};

export const cityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CITY: {
      return { ...state, city: payload.value };
    }
    default: {
      return state;
    }
  }
};
