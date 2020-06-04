import React from 'react';
import { CES_GREY_HOVER } from '../../constants/colorTypes';
import RowsInCell from './RowsInCell';
import { isBetween } from '../../utils/Booking';

const CellInCalendar = props => {
  const {
    resource,
    row,
    indexResource = 0,
    startIndex = -1,
    endIndex = -1,
    sameRow = false,
    onBegin = () => {},
    onEnd = () => {},
    onUpdate = () => {},
  } = props;
  return row.map((cell, index) => {
    const { dateInCell } = cell;
    const color =
      sameRow && isBetween(index, startIndex, endIndex) ? CES_GREY_HOVER : '';
    return (
      <RowsInCell
        key={`${dateInCell} ${resource._id}`}
        resource={resource}
        indexResource={indexResource}
        sameRow={sameRow}
        cell={cell}
        cellIndex={index}
        onBegin={onBegin}
        onEnd={onEnd}
        onUpdate={onUpdate}
        color={color}
      />
    );
  });
};

export default CellInCalendar;
