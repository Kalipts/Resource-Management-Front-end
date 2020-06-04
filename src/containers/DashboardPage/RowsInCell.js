/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';

import DropTargetCell from './TableCalendar/DropTargetCell';
import BookingInCell from './TableCalendar/BookingInCell';

const RowsInCell = React.memo(function RowsInCell({
  resource,
  indexResource,
  cell,
  cellIndex,
  onBegin,
  onEnd,
  onUpdate,
  color,
}) {
  const { dateInCell, isWeekend, bookingsInCell } = cell;
  const date = moment(moment(dateInCell).toString());

  const handleMouseDown = () => {
    onBegin(cellIndex, indexResource, date);
  };

  const handleMouseUp = () => {
    onEnd(resource);
  };

  const handleMouseMove = () => {
    onUpdate(cellIndex, date);
  };

  return (
    <DropTargetCell
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      inputColor={color}
      isWeekend={isWeekend}
      resourceId={resource._id}
      date={dateInCell}
    >
      <BookingInCell bookings={bookingsInCell} resource={resource} />
    </DropTargetCell>
  );
});

export default RowsInCell;
