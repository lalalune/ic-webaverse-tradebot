import React from 'react';
import {Stack} from '@mui/material';

export const RemoteSlot = props => {
  return props.item ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class_item class_trade_item"
    >
      <img className="class_item_image" src={props.item.image} />
      <div>
        <span className="class_item_name">{props.item.name}</span>
      </div>
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class_empty_item class_trade_item"
    ></Stack>
  );
};
