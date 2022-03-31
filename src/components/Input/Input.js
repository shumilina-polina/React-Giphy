import React from "react";
import s from "./Input.module.scss";

export const Input = React.forwardRef(({ listenInput }, ref) => {
  return (
    <div className={s.input__container}>
      <input
        className={s.input}
        type="text"
        placeholder="Напишите сообщение…"
        onChange={listenInput}
        ref={ref}
      />
    </div>
  );
});
