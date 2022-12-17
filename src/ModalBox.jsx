import React from "react";

export const ModalBox = ({ children }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      width: '50%',
      height: '50%',
      backgroundColor: 'black',
      border: '.2em solid rgb(12, 30, 32)',
      borderRadius: '.6em',
    }}>
      {children}
    </div>
  );
};
