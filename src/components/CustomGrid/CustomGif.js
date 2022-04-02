import { Gif } from "@giphy/react-components";
import React from "react";
import s from "./CustomGrid.module.scss";

export const CustomGif = ({ gifItem, width }) => {
  const getCurrentTime = () => {
    return new Date().toTimeString().replace(/:[0-9]{2,2} .*/, "");
  };

  const renderGif = (gifItem) => {
    if (gifItem.images.original.width < gifItem.images.original.height + 30) {
      return (
        <Gif
          className={s.gif__single}
          gif={gifItem}
          height={width / 1.8}
          onGifClick={(_, e) => {
            e.preventDefault();
          }}
        />
      );
    } else {
      return (
        <Gif
          className={s.gif__single}
          gif={gifItem}
          width={width * 0.7}
          onGifClick={(_, e) => {
            e.preventDefault();
          }}
        />
      );
    }
  };

  return (
    <li>
      <img className={s.gif__user} src="images/avatar.jpeg" alt="user" />
      <div className={s.gif__single_container}>
        {renderGif(gifItem)}
        <div className={s.gif__time}>{getCurrentTime()}</div>
      </div>
    </li>
  );
};
