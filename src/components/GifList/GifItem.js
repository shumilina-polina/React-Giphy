import React from "react";
import s from "./GifList.module.scss";

export const GifItem = ({ url }) => {
  return (
    <div className="gif__item">
      <img src={url} />
    </div>
  );
};
