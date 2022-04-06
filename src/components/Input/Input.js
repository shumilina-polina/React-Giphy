import React from "react";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import s from "./Input.module.scss";
import { InputFile } from "./InputFile";

export const Input = React.forwardRef(({ listenInput }, ref) => {
  return (
    <div className={s.input__container}>
      <div className={s.input__wrapper}>
        <input
          tabIndex="1"
          className={s.input}
          type="text"
          placeholder="Напишите сообщение…"
          onChange={listenInput}
          list="combinations"
          ref={ref}
        />
        <datalist id="combinations">
          <option value="/gif " />
          <option value="/sticker " />
        </datalist>
        <InputFile listenInput={listenInput} />
      </div>
      <ThemeButton />
    </div>
  );
});
