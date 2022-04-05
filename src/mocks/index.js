import { cityData } from "./cityData";

export const normalizedCityData = cityData.map(item => {
  return {
    label: item.name,
    value: item.name,
  };
});
