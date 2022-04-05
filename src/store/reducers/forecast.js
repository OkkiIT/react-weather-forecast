import { FETCH_FORECAST } from "../actionTypes";

const initialState = {
  loading: false,
  error: null,
  feelsLike: "",
  temperature: "",
  windSpeed: "",
  cloudiness: "",
};

export const forecastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FORECAST.START: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_FORECAST.SUCCESS: {
      return {
        ...state,
        loading: false,
        ...payload,
      };
    }
    case FETCH_FORECAST.FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};
