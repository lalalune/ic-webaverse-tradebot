// react header component that takes two props: mode and setMode
// has a centered logo (assets/Logo.svg) and two mode toggle buttons
// the button on the left sets mode to Backback, and uses the assets/Inventory.svg icon
// the button on the right sets mode to Trade, and uses the assets/Trade.svg icon

import React from "react";
import Logo from "./assets/Logo.svg";
import Console from "./assets/Console.svg";
import Inventory from "./assets/Inventory.svg";
import Trade from "./assets/Trade.svg";

const Header = ({ type, connected, mode = "inventory", setMode }) => {
  return (
    <div className="header" style={{ height: "5em", width: "100%" }}>
      <img src={type === "webaverse" ? Logo : Console} style={{
        position: "absolute",
        left: "50%",
        top: "1em",
        transform: "translate(-50%, 0)"
      }} />
      {connected &&
        <button
          style={{
            position: "absolute",
            top: "1em",
            // center
            left: "1em",

            opacity: mode === "inventory" ? 1 : 0.5
          }}
          onClick={() => setMode("inventory")}
        >
          <img src={Inventory} />
        </button>
      }
      {connected &&
        <button
          style={{
            opacity: mode === "trade" ? 1 : 0.5,
            position: "absolute",
            right: "1em",
            top: "1em",
          }}
          onClick={() => setMode("trade")}
        >
          <img src={Trade} />
        </button>
      }
    </div>
  );
}

export default Header;
