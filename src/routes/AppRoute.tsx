import React from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import HomePage from "../pages/website/Home/HomePage";
import DetailBook from "../pages/website/DetailBook";
import CartBook from "../pages/website/CartBook";
import FavoritePage from "../pages/website/FavoritePage";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailBook />} />
          <Route path="/cart" element={<CartBook />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
