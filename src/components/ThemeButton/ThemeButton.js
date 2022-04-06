import React, { useState } from "react";
import s from "./ThemeButton.module.scss";

export const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeCssRootVariables = (theme) => {
    localStorage.setItem("theme", theme);

    const root = document.querySelector(":root");
    const components = [
      "body-background",
      "text-color",
      "container-color",
      "input-background",
      "linear",
      "placeholder-color",
      "time-color",
      "thumb-color",
      "border",
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
    });
  };

  changeCssRootVariables(theme);

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    changeCssRootVariables(theme);
  };

  return (
    <button className={s.button__theme} onClick={changeTheme}>
      <img className={s.img__theme} src="images/theme.svg" alt="change theme"/>
    </button>
  );
};
