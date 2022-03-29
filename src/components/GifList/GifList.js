import React from "react";
import { GifItem } from "./GifItem";
import s from "./GifList.module.scss";

export const GifList = ({ result }) => {
  const items = result.map((itemData) => {
    console.log(itemData.images.fixed_height.url);
    return <GifItem key={itemData.id} url={itemData.images.fixed_height.url} />;
  });
  return <div>{items}</div>;
};
