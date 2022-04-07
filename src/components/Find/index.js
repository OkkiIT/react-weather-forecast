import React, { useEffect } from "react";
import Select from "react-select-virtualized";
import { useDispatch, useSelector } from "react-redux";
import { citySelector, forecastSelector } from "../../store/selectors";
import { addCity } from "../../store/actions/city";
import { normalizedCityData } from "../../mocks";
import { fetchForecast } from "../../store/actions/forecast";
import { FindContainer } from "./styled";

const Find = () => {
  const dispatch = useDispatch();
  const { city } = useSelector(citySelector);
  const forecast = useSelector(forecastSelector);

  const onChange = newValue => {
    if(newValue){
      const { value } = newValue;
      dispatch(addCity({ value }));
    }
  };

  const dispatchForecast = () => {
    dispatch(fetchForecast({ city }));
  };

  useEffect(() => {
    if (city.length > 0) {
      dispatchForecast();
    }
  }, [city]);

  return (
    <FindContainer>
      <Select placeholder="Поиск..." maxMenuHeight={100} onChange={onChange} options={normalizedCityData} />
    </FindContainer>
  );
};

export default Find;
