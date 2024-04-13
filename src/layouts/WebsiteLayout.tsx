import React from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from "../pages/website/headerPage";
import FooterPage from "../pages/website/footerPage";

const WebsiteLayout = () => {
  return (
    <div className="">
      <HeaderPage />
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </div>
  );
};

export default WebsiteLayout;
