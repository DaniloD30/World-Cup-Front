import React from "react";

import Movies from "../views/Movies/";
import CupResult from "../views/CupResult/";
export const routes = [
  {
    path: "/",
    exact: true,
    title: () => "Movies",
    view: () => <Movies />,
    onlyAuthorized: false,
  },
  {
    path: "/result",
    exact: true,
    title: () => "Winners",
    view: () => <CupResult />,
    onlyAuthorized: false,
  },
];
export default routes;
