import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid } from "@giphy/react-components";
import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";
import s from "./CustomGrid.module.scss";

export const CustomGrid = ({ term, gifClick, onGifClick }) => {
  const [width, setWidth] = useState(0);
  const [pattern, setPattern] = useState("bigHeight");

  const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
  const callGiphy = async (offset) => {
    return await giphy.search(term, {
      offset,
      sort: "relevant",
      lang: "es",
      limit: 10,
      type: "gifs",
    });
  };

  const renderGrid = () => {
    console.log(pattern);
    if (gifClick) {
      if (pattern === "bigWidth") {
        return (
          <Gif
            className={s.singleGif}
            gif={gifClick}
            height={190}
            onGifClick={(_, e) => {
              e.preventDefault();
            }}
          />
        );
      }
      return (
        <Gif
          className={s.singleGif}
          gif={gifClick}
          width={width * 0.5}
          onGifClick={(_, e) => {
            e.preventDefault();
          }}
        />
      );
    }
    return (
      <Grid
        width={width}
        columns={3}
        gutter={6}
        fetchGifs={callGiphy}
        noResultsMessage={""}
        key={Math.random(5)}
        onGifClick={(_, e) => {
          if (e.target.style.width < e.target.style.height) {
            setPattern("bigHeight");
          } else {
            setPattern("bigWidth");
          }
          onGifClick(_, e);
        }}
      />
    );
  };

  return (
    <>
      {renderGrid()}
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(Math.floor(width) - 15);
        }}
      />
    </>
  );
};
