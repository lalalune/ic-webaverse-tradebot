import React from 'react';
import {Stack} from '@mui/material';

export const RemoteSlot = ({item}) => {
  return item ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="class_item class_trade_item"
    >
      <img className="class_item_image" src={item.image} />
      <div>
        <span className="class_item_name">{item.name}</span>
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
