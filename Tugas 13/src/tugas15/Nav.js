import React from "react";
import { Link } from "react-router-dom";

import "./NavStyle.css";
import Theme from "./Theme";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tugas11">Tugas 11</Link>
        </li>
        <li>
          <Link to="/tugas12">Tugas 12</Link>
        </li>
        <li>
          <Link to="/tugas13">Tugas 13</Link>
        </li>
        <li>
          <Link to="/tugas14">Tugas 14</Link>
        </li>
        <li>
          <Link to="/tugas15">Tugas 15</Link>
        </li>
        <li style={{ marginLeft: "auto" }}>
          <Theme />
        </li>
        <li>{props.theme}</li>
      </ul>
    </nav>
  );
};

export default Nav;
