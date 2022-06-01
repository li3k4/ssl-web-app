import React from "react";
import styles from "./App.module.css";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";

import solar from "../../resources/img/solar.svg";
import snow_light from "../../resources/img/snow_light.svg";
import Content from "../Content";

const App = () => {
  return (
    <div className="body">
      <Navbar/>
      <Content/>
    </div>
  );
};

export default App;
