import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiphyGrid } from "./GipphyGrid";
import { useContext } from 'react';

import { IContext, StoreContext } from '../store/StoreContext';
import {
  Gif
} from "@giphy/react-components";
import { IGif } from "@giphy/js-types";
const Giphy = () => {
  const [modalGif, setModalGif] = useState<IGif>();

  const {
    giphy,
} = useContext<IContext>(StoreContext);

useEffect(() => {

}, []);

  return (
    <>
    <GiphyGrid
        onGifClick={(gif:any, e:any) => {
          console.log("gif", gif);
          e.preventDefault();
          setModalGif(gif);
        }}
      />
      {modalGif && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, .8)"
          }}
          onClick={(e) => {
            e.preventDefault();
            setModalGif(undefined);
          }}
        >
          <Gif gif={modalGif} width={200} />
        </div>
      )}
      </>
  );
};

export default Giphy;
