import React, { useEffect } from "react";
import { useStore } from './utils/store';

const getLength = (a: any, b: any) => {
  const length = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  return length;
};

const getTopLeft = (pt: any) => {
  const inventoryModalRect = document
    .getElementsByClassName("class-inventory")[0]
    .getBoundingClientRect();
  const tl = document
    .getElementsByClassName("class-inventory-top-left")[0]
    ?.getBoundingClientRect();
  const tr = document
    .getElementsByClassName("class-inventory-top-right")[0]
    ?.getBoundingClientRect();
  const br = document
    .getElementsByClassName("class-inventory-bottom-right")[0]
    ?.getBoundingClientRect();
  const bl = document
    .getElementsByClassName("class-inventory-bottom-left")[0]
    ?.getBoundingClientRect();

  const topLength = getLength(tl, tr);
  const bottomLength = getLength(bl, br);
  const leftLength = getLength(tl, bl);
  const rightLength = getLength(tr, br);

  const addHeight = (pt.x - inventoryModalRect.x) / inventoryModalRect.width;

  const diffTopY =
    tl!.y < tr!.y
      ? Math.abs(((tr!.y - tl!.y) * (pt.x - tl!.x)) / (tr!.x - tl!.x))
      : Math.abs((tr!.y - tl!.y) * (1 - (pt.x - tl!.x) / (tr!.x - tl!.x)));
  const diffLeftX = Math.abs(
    ((bl!.x - tl!.x) * (bl!.y - pt.y)) / (bl!.y - tl!.y)
  );

  const diffAddHeight = tl!.y < tr!.y ? addHeight : 1 - addHeight;
  const modalHeight =
    Math.min(leftLength, rightLength) +
    Math.abs(leftLength - rightLength) * diffAddHeight;
  const modalWidth =
    Math.min(topLength, bottomLength) +
    (Math.abs(topLength - bottomLength) * (pt.y - inventoryModalRect.y)) /
    inventoryModalRect.height;

  const top = (pt.y - Math.min(tl!.y, tr!.y) - diffTopY) * (500 / modalHeight);
  const left = (pt.x - tl!.x - diffLeftX) * (900 / modalWidth);

  return { top, left };
};

const DragAndDropAPI = (props: any) => {
  const {
    itemNumPerPage, updateItemNumPerPage,
    nfts, updateNfts, tradeItems,
    updateTradeItems, items, updateItems,
    selSlot, updateSelSlot,
    curPage, updateCurPage,
  } = useStore()

  const slotDraggedRef = React.useRef(selSlot);

  useEffect(() => {
    slotDraggedRef.current = selSlot;
  }, [selSlot]);

  const moveElementCloneToMouseCoords = async (x: number, y: number) => {
    const slot = slotDraggedRef.current;
    if (!slot) return false;
    const insertedChild = document.getElementById(`class-item-slot-ghost-${slot}`);
    if (!insertedChild) return false;
    insertedChild.style.left = `${x}px`;
    insertedChild.style.top = `${y}px`;
  };

  const onMouseMove = (event: any) => {
    event.preventDefault();
    const { top, left } = getTopLeft({ x: event.clientX, y: event.clientY });
    moveElementCloneToMouseCoords(left, top);
  };

  const onMouseClick = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    if (!slotDraggedRef.current) return false;
    const div = event.target;
    const slot = div.getAttribute("data-slot");
    const type = div.getAttribute("data-type");
    // const slotNumber = parseInt(slot);

    // if (slot  && type === "item") {
    //   updateSelSlot(slotNumber);
    //   const itemSelected: any = document.getElementById(`class-item-slot-${slot}`);
    //   const itemList = document.getElementsByClassName("inventory")[0];
    //   const itemClone = itemSelected.cloneNode(true);
    //   itemClone.className += " being-dragged";
    //   itemClone.id = `class-item-slot-ghost-${slot}`;
    //   itemList.appendChild(itemClone);
    //   const { top, left } = getTopLeft({ x: event.clientX, y: event.clientY });
    //   itemClone.style.top = `${top}px`;
    //   itemClone.style.left = `${left}px`;
    //   itemClone.style.zIndex = "50";
    //   itemSelected.className += " being-moved";
    // }
  };

  const onMouseReleased = (event) => {
    // if (slotDraggedRef.current === null) return false;

    // event.preventDefault();
    // const { clientX, clientY } = event;
    // const slot = slotDraggedRef.current;
    // if (slot === null) return false;
    // const itemSlotElement: any = document.getElementById(`class-item-slot-${slot}`);
    // itemSlotElement.className = itemSlotElement.className.replace(
    //   " being-moved",
    //   ""
    // );
    // const itemGhostElement: any = document.getElementById(
    //   `class-item-slot-ghost-${slot}`
    // );
    // itemGhostElement.remove();

    // const target: any = document.elementFromPoint(clientX, clientY);
    // const targetSlot = target.getAttribute("data-slot");
    // // console.log(targetSlot, slot)
    // if (
    //   ((targetSlot < itemNumPerPage && slot < itemNumPerPage * 2) ||
    //     (slot >= itemNumPerPage && targetSlot >= itemNumPerPage * 2) ||
    //     (slot >= itemNumPerPage && slot < itemNumPerPage * 2) ||
    //     (targetSlot >= itemNumPerPage && targetSlot < itemNumPerPage * 2)) &&
    //   targetSlot !== slot &&
    //   targetSlot !== null
    // ) {
    //   props.moveItemToSlot(slot, targetSlot);
    // }
    // updateSelSlot(null);
  };

  useEffect(() => {
    const element = document.getElementsByClassName(`class-inventory`)[0];
    element!.addEventListener("mousemove", onMouseMove);
    element!.addEventListener("click", onMouseClick);
    element!.addEventListener("mouseup", onMouseReleased);
    return () => {
      element!.removeEventListener("mousemove", onMouseMove);
      element!.removeEventListener("mouseup", onMouseReleased);
      element!.removeEventListener("click", onMouseClick);
    };
  }, []);

  return null;
};

export default DragAndDropAPI;
