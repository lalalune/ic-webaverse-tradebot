import React, { useEffect } from "react";
import { inventoryLimit } from "./util/orderItems";

const getLength = (a: any, b: any) => {
  const length = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  return length;
};

const getTopLeft = (pt: any) => {
  const inventoryModalRect = document
    .getElementsByClassName("inventory-modal")[0]
    .getBoundingClientRect();
  const tl = document
    .getElementById("inventory_top_left")
    ?.getBoundingClientRect();
  const tr = document
    .getElementById("inventory_top_right")
    ?.getBoundingClientRect();
  const br = document
    .getElementById("inventory_bottom_right")
    ?.getBoundingClientRect();
  const bl = document
    .getElementById("inventory_bottom_left")
    ?.getBoundingClientRect();

  const topLength = getLength(tl, tr);
  const bottomLength = getLength(bl, br);
  const leftLength = getLength(tl, bl);
  const rightLength = getLength(tr, br);

  const addheight = (pt.x - inventoryModalRect.x) / inventoryModalRect.width;

  const diffTopY =
    tl!.y < tr!.y
      ? Math.abs(((tr!.y - tl!.y) * (pt.x - tl!.x)) / (tr!.x - tl!.x))
      : Math.abs((tr!.y - tl!.y) * (1 - (pt.x - tl!.x) / (tr!.x - tl!.x)));
  const diffLeftX = Math.abs(
    ((bl!.x - tl!.x) * (bl!.y - pt.y)) / (bl!.y - tl!.y)
  );

  const diffaddheight = tl!.y < tr!.y ? addheight : 1 - addheight;
  const modalHeight =
    Math.min(leftLength, rightLength) +
    Math.abs(leftLength - rightLength) * diffaddheight;

  const modalWidth =
    Math.min(topLength, bottomLength) +
    (Math.abs(topLength - bottomLength) * (pt.y - inventoryModalRect.y)) /
      inventoryModalRect.height;

  const top = (pt.y - Math.min(tl!.y, tr!.y) - diffTopY) * (500 / modalHeight);
  const left = (pt.x - tl!.x - diffLeftX) * (900 / modalWidth);

  return { top, left };
};

const ExportingComponent = (props: any) => {
  const slotDraggedRef = React.useRef(props.activeDraggedSlot);

  useEffect(() => {
    slotDraggedRef.current = props.activeDraggedSlot;
  }, [props.activeDraggedSlot]);

  const setDraggingSlot = (slotIndex: number | null) => {
    props.setActiveDraggedSlot(slotIndex);
  };

  const moveElementCloneToMouseCoords = async (x, y) => {
    const slot = slotDraggedRef.current;
    if (slot === null) return false;
    const insertedChild = document.getElementById(`item-slot-ghost-${slot}`);
    if (!insertedChild) return false;
    insertedChild.style.left = `${x}px`;
    insertedChild.style.top = `${y}px`;
  };

  const onMouseMove = (event) => {
    event.preventDefault();
    const { top, left } = getTopLeft({ x: event.clientX, y: event.clientY });
    moveElementCloneToMouseCoords(left, top);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const onMouseClick = (event) => {
    stopPropagation(event);
    // console.log("Mouse click");
    if (slotDraggedRef.current !== null) return false;
    event.preventDefault();
    const div = event.target;
    const slot = div.getAttribute("data-slot");
    const type = div.getAttribute("data-type");

    if (slot !== undefined && type === "item") {
      const slotNumber = parseInt(slot);
      setDraggingSlot(slotNumber);
      const itemSelected: any = document.getElementById(`item-slot-${slot}`);
      const itemList = document.getElementsByClassName("inventory")[0];
      const itemClone = itemSelected.cloneNode(true);
      itemClone.className += " being-dragged";
      itemClone.id = `item-slot-ghost-${slot}`;
      itemList.appendChild(itemClone);
      const { top, left } = getTopLeft({ x: event.clientX, y: event.clientY });
      itemClone.style.top = `${top}px`;
      itemClone.style.left = `${left}px`;
      itemClone.style.zIndex = "50";
      itemSelected.className += " being-moved";
    }
  };

  const onMouseReleased = (event) => {
    if (slotDraggedRef.current === null) return false;

    event.preventDefault();
    const { clientX, clientY } = event;
    const slot = slotDraggedRef.current;
    if (slot === null) return false;
    const itemSlotElement: any = document.getElementById(`item-slot-${slot}`);
    itemSlotElement.className = itemSlotElement.className.replace(
      " being-moved",
      ""
    );
    const itemGhostElement: any = document.getElementById(
      `item-slot-ghost-${slot}`
    );
    itemGhostElement.remove();

    const target: any = document.elementFromPoint(clientX, clientY);
    const targetSlot = target.getAttribute("data-slot");
    // console.log(targetSlot, slot)
    if (
      ((targetSlot < inventoryLimit && slot < inventoryLimit * 2) ||
        (slot >= inventoryLimit && targetSlot >= inventoryLimit * 2) ||
        (slot >= inventoryLimit && slot < inventoryLimit * 2) ||
        (targetSlot >= inventoryLimit && targetSlot < inventoryLimit * 2)) &&
      targetSlot !== slot &&
      targetSlot !== null
    ) {
      props.changeItems(slot, targetSlot);
    }
    setDraggingSlot(null);
  };

  useEffect(() => {
    const element = document.getElementById(`inventory_trade`);
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

export default ExportingComponent;
