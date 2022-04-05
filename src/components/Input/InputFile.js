import React from "react";
import s from "./Input.module.scss";

export const InputFile = ({ listenInput }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.dispatchEvent(new MouseEvent("click"));
    }
  };

  return (
    <label
      htmlFor="gifFile"
      className={s.input__file_label}
      tabIndex="2"
      onKeyPress={handleKeyPress}
    >
      <img className={s.input__file_img} src="images/clip.svg" alt="clip" />
      <input
        type="file"
        id="gifFile"
        accept="image/jpeg,image/png,image/gif"
        onChange={listenInput}
      />
    </label>
  );
};
