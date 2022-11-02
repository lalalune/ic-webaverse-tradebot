import React from 'react';
import {Stack} from '@mui/material';

export const ItemSlot = ({item, isTrade}) => {
  return item && item.slot ? (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={`${'class_item'} ${
        isTrade ? 'class_trade_item' : 'class_user_item'
      }`}
    >
      <div
        id={`id_item_slot_${item.slot}`}
        className="class_item_content"
        data-slot={item.slot}
        data-type={`item`}
      >
        <img className="class_item_image" src={item.image} />
        <div>
          <span className="class_item_name">{item.name}</span>
        </div>
      </div>
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      className={`${'class_empty_item'} ${
        isTrade ? 'class_trade_item' : 'class_user_item'
      }`}
    >
      <div
        id="id_item_slot_empty"
        className="class_item_empty_content"
        style={{width: '100%', height: '100%'}}
        data-slot={-1}
        data-type={`empty`}
      ></div>
    </Stack>
  );
};
