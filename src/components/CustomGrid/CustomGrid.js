import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";

export const CustomGrid = ({ term }) => {
  const [width, setWidth] = useState(0);
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

  return (
    <>
      <Grid
        width={width}
        columns={3}
        gutter={6}
        fetchGifs={callGiphy}
        noResultsMessage={" "}
        key={Math.random(5)}
        // onGifClick={onGifClick}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(Math.floor(width) - 15);
        }}
      />
    </>
  );
};
