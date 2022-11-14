import React, { useRef, useEffect } from "react";
import { GLTFModel } from "react-3d-viewer";

import { useStore } from "./utils/store";
import { isImage, isMedia, isModel } from "./utils/funcs";

export const ItemDetails = () => {
  const { selItem } = useStore();
  const modelRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const refContainer = modelRef?.current?.$container;
      if (refContainer?.children?.length > 1) {
        refContainer.removeChild(refContainer.firstChild);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return selItem ? (
    <div className="absolute bottom-0 right-0 z-10 flex flex-col w-1/4 gap-1 p-4 bg-black-100">
      <div className="flex flex-col gap-1 font-bold text-red-900">
        <div>{selItem?.collection}</div>
        <div>{"#7849"}</div>
      </div>
      <div className="flex items-center justify-center w-full p-4 bg-black">
        {isImage(selItem?.metadata?.image) && (
          <img className="w-4/5" src={selItem.metadata.image} />
        )}
        {isMedia(selItem?.metadata?.image) && (
          <video
            className="w-4/5"
            src={selItem.metadata.image}
            autoPlay
            loop
            muted
          />
        )}
        {isModel(selItem?.metadata?.image) && (
          <GLTFModel
            ref={modelRef}
            width={192}
            height={192}
            src={selItem.metadata.image}
            enabled={false}
            position={{ x: -0.15, y: -0.3, z: -0.3 }}
          />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};
