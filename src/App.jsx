import React, {useState} from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import * as R from "ramda";
import { Types, bagConfig, itemDictionary } from "./config";
import DragLayer from "./DragLayer";
import StyledApp from "./App.style";
import { isBlank, canStack } from "./helpers";
import Inventory from "./inventory";
import { Button } from "@mui/material";
import Frame from "./frame/Frame";
// this would likely be followed by an api call to retrieve item data from those id's.
const items = {
  3: { id: 7 },
  6: { id: 8 },
  7: { id: 10 },
  8: { id: 11 }
};

function App (props) {
  const [connected, setConnected] = useState(false);
    const [state, setState] = useState({
      items,
    });

  const updateItemOrder = (bagId, dragItem) => {
    const items = state.items;
    const target = items[bagId]; // the box we're droping to
    const origin = R.clone(items[dragItem.bagId]);
    const shouldStack = canStack(
      R.prop("id", target),
      R.prop("id", origin),
      R.path([R.prop("id", target), "stackable"], itemDictionary)
    );
    if (target) {
      if (dragItem.isEquiped && target.type !== dragItem.type) {
        return false;
      }
      // if we have an item in it
      if (shouldStack) {
        origin.count += target.count;
        delete items[dragItem.bagId];
      } else {
        items[dragItem.bagId] = target; // move that item to the drag past location
      }
    } else {
      delete items[dragItem.bagId]; // otherwise remove the previous reference
    }
    items[bagId] = origin; // move the actual drag item to new bag
    setState({ items });
  };

    return (
      <StyledApp>
        <DndProvider backend={Backend}>
          <DragLayer />
          <Inventory items={items} connected={connected} connect={() => {setConnected(true)}} updateItemOrder={updateItemOrder} />
      <div style={{width: "30%", display: "inline-block", verticalAlign: "top", height: "100%"}}>
      <Frame>
      <div  style={{height: "100%", minHeight: "630px"}}>
      cool
      </div>
      </Frame>
      </div>
        </DndProvider>
      </StyledApp>
    );
}

export default App;
