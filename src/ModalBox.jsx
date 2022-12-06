import React from "react";

export const ModalBox = ({ children }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 2,
    }}>
      <div style={{
        width: '40%',
        height: '30%',
        backgroundColor: 'black',
        border: '.2em solid rgb(12, 30, 32)',
        borderRadius: '.6em',
      }}>
        {children}
      </div>
    </div>
  );
};
