import React from "react";
import s from "./Input.module.scss";

export const Input = ({value,listenInput}) => {
  return (
      <input
        className={s.input}
        type="text"
        value={value}
        placeholder="Напишите сообщение…"
        onChange={listenInput}
      />
  );
};
