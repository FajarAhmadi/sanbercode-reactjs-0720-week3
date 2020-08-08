import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./SliderStyle.css";

const Theme = () => {
  const [, setTheme] = useContext(ThemeContext);

  const handleChange = (event) => {
    const checked = event.target.checked;
    const theme = checked ? "Dark" : "Light";
    setTheme(theme);
  };

  return (
    <>
      <div>
        <label className="switch">
          <input name="slider" type="checkbox" onChange={handleChange} />
          <span className="slider round" />
        </label>
      </div>
    </>
  );
};

export default Theme;
