import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 120px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 8px;
`;

export const CityInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-top: 2px;
`;

export const WeatherInfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  padding-bottom: 25px;
`;
