import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  Gif,
  Grid,
  Carousel,
  Video,
  VideoOverlay
} from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

interface IProps{
    onGifClick:any
}

export function GiphyGrid({ onGifClick }:IProps) {
  const fetchGifs = (offset:any) =>
    giphyFetch.trending({ offset, limit: 10 });
  const [width, setWidth] = useState(window.innerWidth);
  return (
    <>
      <Grid
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </>
  );
}