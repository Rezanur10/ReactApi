import React from "react";
import { Redirect } from "react-router-dom";


//Product
import UserList from "../components/HomeList";


const alllRoutes = [

  { path: "/users/list", component: UserList },
];

export { alllRoutes };
