import React from "react";
import s from "./Input.module.scss";

export const Input = () => {
  return (
    <input className={s.input} type="text" placeholder="Напишите сообщение…" />
  );
};
