import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid } from "@giphy/react-components";
import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";
import s from "./CustomGrid.module.scss";

export const CustomGrid = ({ term, gifClick, onGifClick }) => {
  const [width, setWidth] = useState(0);
  const [pattern, setPattern] = useState("bigHeight");

  const getCurrentTime = () => {
    return new Date().toTimeString().replace(/:[0-9]{2,2} .*/, "");
  };

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
    if (gifClick) {
      if (pattern === "bigHeight") {
        return (
          <div className={s.gif__container}>
            <Gif
              className={s.gif__single}
              gif={gifClick}
              height={width / 1.617}
              onGifClick={(_, e) => {
                e.preventDefault();
              }}
            />
            <div className={s.gif__time}>{getCurrentTime()}</div>
          </div>
        );
      }
      return (
        <div className={s.gif__container}>
          <Gif
            className={s.singleGif}
            gif={gifClick}
            width={width * 0.8}
            onGifClick={(_, e) => {
              e.preventDefault();
            }}
          />
          <div className={s.gif__time}>{getCurrentTime()}</div>
        </div>
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
          const gifWidth = e.target.getAttribute("width");
          const gifHeight = e.target.getAttribute("height");
          if (+gifWidth < +gifHeight + 30) {
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
