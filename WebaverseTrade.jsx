import React from "react";

import Trade from "./dist/Trade.js";
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
window.Buffer = Buffer

const WebaverseTrade = () => {
  return <Trade type={"webaverse"} />;
};

export default WebaverseTrade;
