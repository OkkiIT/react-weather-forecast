import React from "react";
import { CardContainer, CityInfoContainer, WeatherInfoContainer } from "./styled";
import { useSelector } from "react-redux";
import { citySelector, forecastSelector } from "../../store/selectors";
import Loader from "../Loader";

const WeatherCard = () => {
  const { city } = useSelector(citySelector);
  const { feelsLike, temperature, windSpeed, cloudiness, loading, error } = useSelector(forecastSelector);

  if (error) {
    return (
      <CardContainer>
        <h3>{error}</h3>
      </CardContainer>
    );
  }

  if (loading) {
    return (
      <CardContainer>
        <Loader />
      </CardContainer>
    );
  }

  return (
    <CardContainer>
      {temperature ? (
        <>
          <CityInfoContainer>
            <p>
              Город : <b>{city}</b>
            </p>
          </CityInfoContainer>
          <hr style={{ width: "80%", color: "hsl(0, 0%, 80%)" }} />
          <WeatherInfoContainer>
            <p>
              Температура :<b>{temperature}</b>
            </p>
            <p>
              Ощущается :<b>{feelsLike}</b>
            </p>
            <p>
              Скорость ветра :<b>{windSpeed}</b>
            </p>
            <p>
              Облачность :<b>{cloudiness}</b>
            </p>
          </WeatherInfoContainer>
        </>
      ) : (
        <h2>Выберите город из списка</h2>
      )}
    </CardContainer>
  );
};

export default WeatherCard;
