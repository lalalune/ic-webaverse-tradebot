import React from 'react';
import {Stack} from '@mui/material';

export const ItemSlot = ({item, isTrade}) => {
  return item && item.slot ? (
    <Stack
      id={`id_item_${item.slot}`}
      justifyContent="center"
      alignItems="center"
      className={`${'class_item'} ${
        isTrade ? 'class_trade_item' : 'class_user_item'
      }`}
    >
      <img className="class_item_image" src={item.image} />
      <div>
        <span className="class_item_name">{item.name}</span>
      </div>
    </Stack>
  ) : (
    <Stack
      id="id_item_empty"
      justifyContent="center"
      alignItems="center"
      className={`${'class_empty_item'} ${
        isTrade ? 'class_trade_item' : 'class_user_item'
      }`}
      data-slot={-1}
      data-type={`empty`}
    ></Stack>
  );
};
