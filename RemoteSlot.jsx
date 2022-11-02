import React from 'react';
import {Stack} from '@mui/material';

export const RemoteSlot = props => {
  return props.item ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class_item class_trade_item"
    >
      <div className="class_item_content">
        <img className="class_item_image" src={props.item.image} />
        <div>
          <span className="class_item_name">{props.item.name}</span>
        </div>
      </div>
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class_empty_item class_trade_item"
    >
      <div
        className="class_item_empty_content"
        style={{width: '100%', height: '100%'}}
      ></div>
    </Stack>
  );
};
