import React from 'react';
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import {IconButton, Stack, Button} from '@mui/material';
import {Item} from './Item';
import {useStore} from './store';

export const InventoryComponent = props => {
  // console.log('InventoryComponent Render');

  const {itemNumPerPage} = useStore();

  let emptyItemNum = 0;
  const lastPageItemNum = props.compItems.length % itemNumPerPage;
  if (lastPageItemNum) {
    emptyItemNum = itemNumPerPage - lastPageItemNum;
  } else {
    if (props.compItems.length < itemNumPerPage)
      emptyItemNum = itemNumPerPage - props.compItems.length;
  }

  const onNextPage = () => {
    const curPage = props.curPage;
    const pageNum = props.pageNum;
    const updatePage = props.updatePage;
    if (curPage >= pageNum || !updatePage) return;
    updatePage(curPage + 1);
  };

  const onPrevPage = () => {
    const curPage = props.curPage;
    const updatePage = props.updatePage;
    if (curPage <= 1 || !updatePage) return;
    updatePage(curPage - 1);
  };

  const onAccept = () => {
    console.log('onAccept: ');
  };

  const onCancel = () => {
    console.log('onCancel: ');
  };

  return (
    <div className="class_inventory_panel_component">
      <div className="class_inventory_panel_component_title">{props.title}</div>
      <div className="class_inventory_panel_component_content">
        <Stack
          direction="row"
          justifyContent="flex-start"
          gap="8px"
          flexWrap={'wrap'}
          sx={{position: 'relative'}}
        >
          {React.Children.toArray(
            Array.from({length: props.compItems.length}).map((empty, index) => (
              <Item item={props.compItems[index]} isTrade={props.isTrade} />
            )),
          )}
          {React.Children.toArray(
            Array.from({length: emptyItemNum}).map(val => (
              <Item isTrade={props.isTrade} />
            )),
          )}
        </Stack>

        {props.isTrade ? (
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {props.isAcceptedOffer ? (
              <div className="class_common_text">Accepted</div>
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
                props.curPage <= 1 ? 'class_common_disable' : ''
              }`}
              onClick={() => onPrevPage()}
              disabled={props.curPage < 1}
            >
              <IoIosArrowBack />
            </IconButton>
            <p className="class_common_text">
              Page {`${props.curPage} - ${props.pageNum}`}
            </p>

            <IconButton
              sx={{svg: {color: 'white'}}}
              className={`${'class_pagination_btn'} ${
                props.curPage >= props.pageNum ? 'class_common_disable' : ''
              }`}
              onClick={() => onNextPage()}
              disabled={props.curPage >= props.pageNum}
            >
              <IoIosArrowForward />
            </IconButton>
          </Stack>
        )}
      </div>
    </div>
  );
};
