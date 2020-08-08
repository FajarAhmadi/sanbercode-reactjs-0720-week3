import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

import Nav from "./Nav";
import Tugas11 from "../tugas11/HargaBuah";
import Tugas12 from "../tugas12/Timer";
import Tugas13 from "../tugas13/FormBuah";
import Tugas14 from "../tugas14/FormBuahHooks";
import Tugas15 from "../tugas15/Fruit";

const Routes = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={theme === "Light" ? "light-theme" : "dark-theme"}>
      <Nav theme={theme === "Light" ? "Light Theme" : "Dark Theme"} />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Tugas11 />
          </Route>
          <Route path="/tugas11">
            <Tugas11 />
          </Route>
          <Route path="/tugas12">
            <Tugas12 start={101} />
          </Route>
          <Route path="/tugas13">
            <Tugas13 />
          </Route>
          <Route path="/tugas14">
            <Tugas14 />
          </Route>
          <Route path="/tugas15">
            <Tugas15 />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
