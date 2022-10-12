import React from "react";
import "./styles.css";
import AvatarInventory from "./src";
const TradeBanner = () => {
  const items0 = [
    { name: "hehe", image: "1.png" },
    { name: "TgTg", image: "1.png" },
    { name: "TgTg", image: "1.png" },
    { name: "TgTg", image: "1.png" },
    { name: "TgTg", image: "1.png" },
    { name: "TgTg", image: "1.png" },
  ];
  const items1 = [
    { name: "hehe", image: "1.png", slot: 13 },
    { name: "TgTg", image: "1.png" },
  ];

  const onDragEvent = (data, indexSlot) => {
    console.log("Drag data: ", data);
    console.log("Drag itemIndex: ", indexSlot);
  };
  const onDropEvent = (data, indexSlot) => {
    console.log("Drop data: ", data);
    console.log("Drop itemIndex: ", indexSlot);
  };
  const nextPage = () => {
    console.log("Clicked next button");
  };
  const prevPage = () => {
    console.log("Clicked prev button");
  };

  return (
    <AvatarInventory
      NFTs={items0}
      items1={items1}
      background="black"
      dragEvent={onDragEvent}
      dropEvent={onDropEvent}
      goToNextPage={nextPage}
      goToPrevPage={prevPage}
    />
  );
};
export default TradeBanner;
