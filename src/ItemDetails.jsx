import React from "react";
import { GLTFModel } from "react-3d-viewer";

import { isImage, isMedia, isModel } from "./utils/funcs";

export const ItemDetails = ({selItem}) => {
  const modelRef = React.useRef(null);

  React.useEffect(() => {
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
        {(isImage(selItem?.url) && (
        (!isImage(selItem && selItem.url) && !isMedia(selItem && selItem.url) && !isModel(selItem && selItem.url))) &&
          <img className="w-4/5" src={selItem.url} />
        )}
        {false && isMedia(selItem?.url) && (
          <video
            className="w-4/5"
            src={selItem.url}
            autoPlay
            loop
            muted
          />
        )}
        {false && isModel(selItem?.url) && (
          <GLTFModel
            ref={modelRef}
            width={192}
            height={192}
            src={selItem.url}
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
