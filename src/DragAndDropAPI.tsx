import React, { useEffect } from "react"
import { inventoryLimit } from "./util/orderItems"

const ExportingComponent = (props: any) => {
  const slotDraggedRef = React.useRef(props.activeDraggedSlot)

  useEffect(() => {
    slotDraggedRef.current = props.activeDraggedSlot
  }, [props.activeDraggedSlot])

  const setDraggingSlot = (slotIndex: number | null) => {
    props.setActiveDraggedSlot(slotIndex)
  }

  const moveElementCloneToMouseCoords = async (x, y) => {
    const slot = slotDraggedRef.current
    if (slot === null) return false
    const insertedChild = document.getElementById(`item-slot-ghost-${slot}`)
    if (!insertedChild) return false
    insertedChild.style.left = `${x}px`
    insertedChild.style.top = `${y}px`
  }

  const onMouseMove = (event) => {
    event.preventDefault()
    const { top, left } = getTopLeft({ x: event.clientX, y: event.clientY })
    moveElementCloneToMouseCoords(left, top)
  }

  const stopPropagation = e => {
    e.stopPropagation();
  };

  const onMouseClick = (event) => {
    stopPropagation(event);
    // console.log("Mouse click");
    if (slotDraggedRef.current !== null) return false
    event.preventDefault()
    const div = event.target
    const slot = div.getAttribute("data-slot")
    const type = div.getAttribute("data-type")

    if (slot !== undefined && type === "item") {
      const slotNumber = parseInt(slot)
      setDraggingSlot(slotNumber)
      const itemSelected: any = document.getElementById(`item-slot-${slot}`)
      const itemList = document.getElementsByClassName("inventory")[0]
      const itemClone = itemSelected.cloneNode(true)
      itemClone.className += " being-dragged"
      itemClone.id = `item-slot-ghost-${slot}`
      itemList.appendChild(itemClone)
      const { top, left } = getTopLeft({ x: event.clientX, y: event.clientY })
      itemClone.style.top = `${top}px`
      itemClone.style.left = `${left}px`
      itemClone.style.zIndex = '50'
      itemSelected.className += " being-moved"
    }
  }

  const onMouseReleased = (event) => {
    if (slotDraggedRef.current === null) return false

    event.preventDefault()
    const { clientX, clientY } = event
    const slot = slotDraggedRef.current
    if (slot === null) return false
    const itemSlotElement: any = document.getElementById(`item-slot-${slot}`)
    itemSlotElement.className = itemSlotElement.className.replace(
      " being-moved",
      "",
    )
    const itemGhostElement: any = document.getElementById(
      `item-slot-ghost-${slot}`,
    )
    itemGhostElement.remove()

    const target: any = document.elementFromPoint(clientX, clientY)
    const targetSlot = target.getAttribute("data-slot")
    // console.log(targetSlot, slot)
    if (
      ((targetSlot < inventoryLimit && slot < inventoryLimit * 2) ||
        (slot >= inventoryLimit && targetSlot >= inventoryLimit * 2) ||
        (slot >= inventoryLimit && slot < inventoryLimit * 2) ||
        (targetSlot >= inventoryLimit && targetSlot < inventoryLimit * 2)) &&
      targetSlot !== slot &&
      targetSlot !== null
    ) {
      props.changeItems(slot, targetSlot)
    }
    setDraggingSlot(null)
  }

  useEffect(() => {
    const element = document.getElementById(`inventory_trade`)
    element!.addEventListener("mousemove", onMouseMove)
    element!.addEventListener("click", onMouseClick)
    element!.addEventListener("mouseup", onMouseReleased)
    return () => {
      element!.removeEventListener("mousemove", onMouseMove)
      element!.removeEventListener("mouseup", onMouseReleased)
      element!.removeEventListener("click", onMouseClick)
    }
  }, [])

  return null
}

export default ExportingComponent

const getAngleFrom3Pts = (a: any, b: any, c: any) => {
  const A = { x: a.x - b.x, y: a.y - b.y }
  const C = { x: c.x - b.x, y: c.y - b.y }
  const angle = getAngleFrom2Vec(A, C)
  return angle
}

const getAngleFrom2Vec = (A, B) => {
  const arcCos = (A.x * B.x + A.y * B.y) / (Math.sqrt(A.x * A.x + A.y * A.y) * Math.sqrt(B.x * B.x + B.y * B.y))
  return Math.acos(arcCos)
}

const getLength = (a: any, b: any) => {
  const length = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
  return length
}

const getTopLeft = (pt: any) => {
  const inventoryModalRect = document.getElementsByClassName("inventory-modal")[0].getBoundingClientRect()
  const tl = document.getElementById('inventory_top_left')?.getBoundingClientRect()
  const tr = document.getElementById('inventory_top_right')?.getBoundingClientRect()
  const br = document.getElementById('inventory_bottom_right')?.getBoundingClientRect()
  const bl = document.getElementById('inventory_bottom_left')?.getBoundingClientRect()

  const vecTLR = { x: tr!.x - tl!.x, y: tr!.y - tl!.y }
  const vecBLR = { x: br!.x - bl!.x, y: br!.y - bl!.y }
  const vecLBT = { x: tl!.x - bl!.x, y: tl!.y - bl!.y }
  const vecRBT = { x: tr!.x - br!.x, y: tr!.y - br!.y }

  const rightAngle = getAngleFrom2Vec(vecTLR, vecBLR)
  const topAngle = getAngleFrom2Vec(vecLBT, vecRBT)

  // console.log('rightAngle: ', rightAngle, 'topAngle: ', topAngle)

  const topLength = getLength(tl, tr)
  const bottomLength = getLength(bl, br)
  const leftLength = getLength(tl, bl)
  const rightLength = getLength(tr, br)

  const addheight = (pt.x - inventoryModalRect.x) / inventoryModalRect.width

  const diffTopY = tl!.y < tr!.y ? Math.abs((tr!.y - tl!.y) * (pt.x - tl!.x) / (tr!.x - tl!.x)) : Math.abs((tr!.y - tl!.y) * (1 - (pt.x - tl!.x) / (tr!.x - tl!.x)))
  const diffLeftX = Math.abs((bl!.x - tl!.x) * (bl!.y - pt.y) / (bl!.y - tl!.y))
  const diffBottomY = Math.abs((bl!.y - br!.y) * (pt.x - bl!.x) / (br!.x - bl!.x))
  const diffRightX = Math.abs((bl!.x - tl!.x) * (bl!.y - pt.y) / (bl!.y - tl!.y))

  const diffaddheight = tl!.y < tr!.y ? addheight : (1 - addheight)
  const modalHeight = Math.min(leftLength, rightLength) + Math.abs(leftLength - rightLength) * diffaddheight

  const modalWidth = Math.min(topLength, bottomLength) + Math.abs(topLength - bottomLength) * (pt.y - inventoryModalRect.y) / inventoryModalRect.height

  // const top = (pt.y - inventoryModalRect.y - diffTopY) * (500 / (Math.max(leftLength, rightLength) * Math.cos(topAngle)))
  // const left = (pt.x - inventoryModalRect.x - diffLeftX) * (900 / (Math.min(topLength, bottomLength) * Math.cos(rightAngle)))

  const top = (pt.y - Math.min(tl!.y, tr!.y) - diffTopY) * (500 / modalHeight)
  const left = (pt.x - tl!.x - diffLeftX) * (900 / modalWidth)

  return { top, left }

















  // const topAngle = getAngleFrom3Pts(tr, tl, { x: tr?.x, y: tl?.y })
  // const leftAngle = getAngleFrom3Pts(bl, tl, { x: tl?.x, y: bl?.y })
  // const diffTopY = Math.abs((tr!.y - tl!.y) * (pt.x - tl!.x) / (tr!.x - tl!.x))
  // const diffLeftX = Math.abs((bl!.x - tl!.x) * (bl!.y - pt.y) / (bl!.y - tl!.y))
  // const diffBottomY = Math.abs((bl!.y - br!.y) * (pt.x - bl!.x) / (br!.x - bl!.x))
  // const diffRightX = Math.abs((bl!.x - tl!.x) * (bl!.y - pt.y) / (bl!.y - tl!.y))

  // // console.log('diffTopY: ', diffTopY)
  // // console.log('diffLeftX: ', diffLeftX)

  // // const top = (pt.y - inventoryModalRect.y - diffTopY) * (leftLength / rightLength) * (500 / inventoryModalRect.height)
  // // const left = (pt.x - inventoryModalRect.x - diffLeftX) * (topLength / bottomLength) * (900 / inventoryModalRect.width)
  // // const top = (pt.y - inventoryModalRect.y - (diffTopY + diffBottomY) / 2) * (500 / inventoryModalRect.height)
  // // const left = (pt.x - inventoryModalRect.x - (diffLeftX + diffRightX) / 2) * (900 / inventoryModalRect.width)
  // const top = (pt.y - inventoryModalRect.y) * (500 / inventoryModalRect.height)
  // const left = (pt.x - inventoryModalRect.x) * (900 / inventoryModalRect.width)

}
