import React from "react";
import "./styles.css";

const Waiting = () => {
  return (
    <div className="waiting">
        <div className="waiting-text waiting-title">Trade With User</div>
        <div className="waiting-text waiting-content">Waiting for another user to join...</div>
        <div className="waiting-text waiting-content">Send this to user for them to join</div>
        <div className="waiting-text waiting-copy-text">http://localhost:8000/trade?id=8s0d98gf09ds (copy)</div>
    </div>
  );
};
export default Waiting;
