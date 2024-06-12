import React, { useState } from "react";
import AppRoute from "./routes/AppRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="font">
          <AppRoute />
        </div>
      </Provider>
    </>
  );
}

export default App;
