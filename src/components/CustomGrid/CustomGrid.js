import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import React, { useLayoutEffect, useRef, useState } from "react";
import ResizeObserver from "react-resize-observer";
import { CustomGif } from "./CustomGif";
import s from "./CustomGrid.module.scss";

export const CustomGrid = ({ term, type, gifClick, onGifClick, gifArr }) => {
  const content = useRef(null);

  const [width, setWidth] = useState(0);

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

  useLayoutEffect(() => {
    content.current.scrollTop = content.current.scrollHeight;
  }, [gifArr]);

  const renderGridOrGif = () => {
    if (gifClick) {
      return (
        <ul className={s.gif__list}>
          {gifArr.map((gifItem) => {
            return (
              <CustomGif key={gifItem.id} gifItem={gifItem} width={width} />
            );
          })}
        </ul>
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
        onGifClick={onGifClick}
      />
    );
  };

  return (
    <div className={s.gif__container}>
      <div className={s.scroll__container}>
        <div className={s.gif__content} ref={content}>
          {renderGridOrGif()}
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
