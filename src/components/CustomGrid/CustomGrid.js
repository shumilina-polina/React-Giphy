import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import React, { useState } from "react";
import ResizeObserver from "react-resize-observer";

export const CustomGrid = ({ temp }) => {
  const [width, setWidth] = useState(0);
  console.log(width);

  const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

  const callGiphy = async (offset) => {
    const res = await giphy.search(`${temp}`, {
      offset,
      sort: "relevant",
      lang: "es",
      limit: 10,
      type: "gifs",
    });
    return res;
  };

  return (
    <>
      <Grid
        width={width}
        columns={3}
        gutter={6}
        fetchGifs={callGiphy}
        noResultsMessage={"Please, try again"}
        // onGifClick={onGifClick}
      />

      <ResizeObserver
        onResize={({ width }) => {
          setWidth(Math.floor(width)-15);
        }}
      />
    </>
  );
};
