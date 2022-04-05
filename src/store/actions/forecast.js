import { FETCH_FORECAST } from "../actionTypes";

export const fetchForecast = payload => ({
  type: FETCH_FORECAST.START,
  payload,
});

export const fetchForecastSuccess = payload => ({
  type: FETCH_FORECAST.SUCCESS,
  payload,
});

export const fetchForecastFailure = payload => ({
  type: FETCH_FORECAST.FAILURE,
  payload,
});
