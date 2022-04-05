import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Find from "./components/Find";
import { AppContainer } from "./components/styled";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Find />
        <WeatherCard />
      </AppContainer>
    </Provider>
  );
};

export default App;
