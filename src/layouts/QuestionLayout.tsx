import React, { FC } from "react";
import { Outlet } from "react-router";
const QuestionLayout: FC = () => {
  return (
    <>
      <div>MainLayout</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayout</div>
    </>
  );
};

export default QuestionLayout;
