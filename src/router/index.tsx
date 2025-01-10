import React from "react";
import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import Edit from "../pages/question/Eidt";
import Stat from "../pages/question/Stat";

const router = createBrowserRouter([
    {
        path: "/question",
        element: <QuestionLayout />,
        children: [
          { path: "edit/:id", element: <Edit /> },
          { path: "stat/:id", element: <Stat /> },
        ],
      },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "/manage",
        element: <ManageLayout />,
        children: [
          { path: "list", element: <List /> },
          { path: "star", element: <Star /> },
          { path: "trash", element: <Trash /> },
        ],
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
export default router;
