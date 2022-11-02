import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import React from 'react';
import {IconButton, Stack, Button} from '@mui/material';

import {ItemSlot} from './ItemSlot';
import {getSlotItem} from './utils/funcs';
import {useStore} from './utils/store';

export const InventoryComponent = props => {
  const {items, curPage, updateCurPage} = useStore();

  const onNextPage = () => {
    updateCurPage(curPage + 1);
  };

  const onPrevPage = () => {
    updateCurPage(curPage > 1 ? curPage - 1 : 1);
  };

  const onAccept = () => {
    console.log('onAccept: ');
  };

  const onCancel = () => {
    console.log('onCancel: ');
  };

  return (
    <>
      <div className="class_inventory_panel_title">{props.title}</div>
      <div className="class_inventory_panel_items">
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap={'wrap'}
          sx={{position: 'relative'}}
        >
          {React.Children.toArray(
            props
              .getSlots()
              .map(slot => (
                <ItemSlot
                  item={getSlotItem(items, slot)}
                  isTrade={props.isTrade}
                />
              )),
          )}
        </Stack>

        {props.isTrade ? (
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {props.tradeItems ? (
              props.isAcceptedOffer && (
                <div className="class_common_result">Accepted</div>
              )
            ) : (
              <>
                <Button variant="contained" color="success" onClick={onAccept}>
                  Accept
                </Button>
                <Button variant="contained" color="error" onClick={onCancel}>
                  Cancel
                </Button>
              </>
            )}
          </Stack>
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              sx={{svg: {color: 'white'}}}
              className={`${'class_pagination_btn'} ${
                curPage <= 1 ? 'class_common_disable' : ''
              }`}
              onClick={() => onPrevPage()}
              disabled={curPage < 1}
            >
              <IoIosArrowBack />
            </IconButton>
            <p className="class_common_text">
              Page {`${curPage} - ${props.totalPage}`}
            </p>

            <IconButton
              sx={{svg: {color: 'white'}}}
              className={`${'class_pagination_btn'} ${
                curPage >= props.totalPage ? 'class_common_disable' : ''
              }`}
              onClick={() => onNextPage()}
              disabled={curPage >= props.totalPage}
            >
              <IoIosArrowForward />
            </IconButton>
          </Stack>
        )}
      </div>
    </>
  );
};
