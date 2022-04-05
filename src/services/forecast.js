import axios from "axios";
import { API_KEY } from "../config";
import { normalizedCloudiness, normalizedTemperature, normalizedWindSpeed } from "../helpers";

export const fetchForecast = async cityName => {
  const {
    data: {
      main: { feels_like: feelsLike, temp: temperature },
      weather: {
        0: { description: cloudiness },
      },
      wind: { speed: windSpeed },
    },
  } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=ru&appid=${API_KEY}&units=metric`);
  return {
    feelsLike: normalizedTemperature(feelsLike),
    temperature: normalizedTemperature(temperature),
    cloudiness: normalizedCloudiness(cloudiness),
    windSpeed: normalizedWindSpeed(windSpeed),
  };
};
