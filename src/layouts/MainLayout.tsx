import React, { FC } from "react";
import { Outlet } from "react-router";
const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayout</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayout footer</div>
    </>
  );
};

export default MainLayout;
