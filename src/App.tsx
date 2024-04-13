import React, { useState } from "react";
import AppRoute from "./routes/AppRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="font">
        <AppRoute />
      </div>
    </>
  );
}

export default App;
