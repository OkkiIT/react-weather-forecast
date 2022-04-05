export const normalizedTemperature = temp => {
  return Math.round(temp) + "c";
};

export const normalizedWindSpeed = speed => {
  return Math.round(speed) + "м/с";
};

export const normalizedCloudiness = cloudiness => {
  return cloudiness[0].toUpperCase() + cloudiness.substring(1);
};
