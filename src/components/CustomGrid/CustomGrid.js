import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid } from "@giphy/react-components";
import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";
import s from "./CustomGrid.module.scss";

export const CustomGrid = ({ term, type, gifClick, onGifClick, gifArr }) => {
  const [width, setWidth] = useState(0);
  const [pattern, setPattern] = useState("bigHeight");


  const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
  const callGiphy = async (offset) => {
    return await giphy.search(term, {
      offset,
      sort: "relevant",
      lang: "es",
      limit: 10,
      type: type,
    });
  };

  const getCurrentTime = () => {
    return new Date().toTimeString().replace(/:[0-9]{2,2} .*/, "");
  };

  const renderGrid = () => {
    if (gifClick && pattern === "bigHeight") {
      return (
        <>
          <img className={s.gif__user} src="images/avatar.jpeg" />
          <div className={s.gif__single_container}>
            <Gif
              className={s.gif__single}
              gif={gifClick}
              height={width / 1.8}
              onGifClick={(_, e) => {
                e.preventDefault();
              }}
            />
            <div className={s.gif__time}>{getCurrentTime()}</div>
          </div>
        </>
      );
    } else if (gifClick && pattern === "bigWidth") {
      return (
        <>
          <img className={s.gif__user} src="images/avatar.jpeg" />
          <div className={s.gif__single_container}>
            <Gif
              className={s.gif__single}
              gif={gifClick}
              width={width * 0.7}
              onGifClick={(_, e) => {
                e.preventDefault();
              }}
            />
            <div className={s.gif__time}>{getCurrentTime()}</div>
          </div>
        </>
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
          if (+gifWidth < +gifHeight + 20) {
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
    <div className={s.gif__container}>
      <div className={s.scroll__container}>
        <div className={s.gif__content}>
          {renderGrid()}
          <ResizeObserver
            onResize={({ width }) => {
              setWidth(Math.floor(width) - 15);
            }}
          />
        </div>
      </div>
    </div>
  );
};
