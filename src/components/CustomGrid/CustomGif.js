import { Gif } from "@giphy/react-components";
import React from "react";
import s from "./CustomGrid.module.scss";

export const CustomGif = ({ gifItem, width }) => {
  const renderGif = (gifItem) => {
    if (gifItem.images.original.width < gifItem.images.original.height + 30) {
      return (
        <Gif
          className={s.gif__single}
          gif={gifItem}
          height={width / 2}
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
          width={width * 0.5}
          onGifClick={(_, e) => {
            e.preventDefault();
          }}
        />
      );
    }
  };

  return (
    <li className={s.gif__list_item}>
      <img className={s.gif__user} src="images/avatar.jpeg" alt="user" />
      <div className={s.gif__single_container}>
        {renderGif(gifItem)}
        <div className={s.gif__time}>{gifItem.currentTime}</div>
      </div>
    </li>
  );
};
