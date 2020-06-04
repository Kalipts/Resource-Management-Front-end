import React, { useContext, useState, useCallback } from 'react';

import RowBookingView from './TableCalendar/Style/RowBookingView';
import useCellsInCalendar from './TableCalendar/useCellsInCalendar';
import { CalendarContext } from '../../context/Calendar';
import { CES_ORANGE_HOVER } from '../../constants/colorTypes';
import CellInCalendar from './CellInCalendar';

const RowInCalendar = () => {
  const calendarContext = useContext(CalendarContext);
  const {
    getMaxTotalOverlapBooking,
    startDay,
    endDay,
    shouldHover,
    rowHover = -1,
    handleCloseModal,
    handleHover,
    setContentGlobal,
  } = calendarContext;

  const { cells } = useCellsInCalendar(startDay, endDay);
  const defaultHover = {
    start: 0,
    end: 0,
    selecting: false,
    startDate: undefined,
    endDate: undefined,
    resourceIndex: 0,
  };
  const [hover, setHover] = useState(defaultHover);

  const beginSelection = useCallback(
    (indexCell, resourceIndex, startDate) => {
      handleHover(resourceIndex);
      setHover({
        start: indexCell,
        end: indexCell,
        selecting: true,
        startDate,
        endDate: startDate,
        resourceIndex,
      });
    },
    [handleHover],
  );
  const endSelection = useCallback(
    resource => {
      const { startDate, endDate, start, end } = hover;
      if (start < end)
        setContentGlobal({
          resource,
          booking: undefined,
          startDate,
          endDate,
        });
      else
        setContentGlobal({
          resource,
          booking: undefined,
          startDate: endDate,
          endDate: startDate,
        });
      handleCloseModal();
      setHover(defaultHover);
      handleHover(-1);
    },
    [hover, defaultHover, defaultHover, handleHover, setContentGlobal],
  );

  const updateSelection = useCallback(
    (indexCell, day) => {
      const { selecting, end } = hover;
      if (!selecting || indexCell === end) return;
      const nextHover = { ...hover };
      nextHover.end = indexCell;
      nextHover.endDate = day;
      setHover(nextHover);
    },
    [hover],
  );

  const handleOverlapBooking = useCallback(
    resourceId => {
      getMaxTotalOverlapBooking(resourceId);
    },
    [getMaxTotalOverlapBooking],
  );

  const renderCells = cells.map((row, indexResource) => {
    const { contentResource, resource } = row;
    const { start, end } = hover;
    const handleHoverOver = () => {
      if (!shouldHover) return;
      const target = document.getElementById(resource._id);
      target.style.backgroundColor = CES_ORANGE_HOVER;
    };
    const handleHoverOut = () => {
      if (!shouldHover) return;
      const target = document.getElementById(resource._id);
      target.style.backgroundColor = '#fff';
    };
    return (
      <RowBookingView
        resourceId={resource._id}
        hover={shouldHover}
        key={resource._id}
        onMouseOver={handleHoverOver}
        onFocus={handleHoverOver}
        onMouseOut={handleHoverOut}
        onBlur={handleHoverOut}
        overlapBooking={handleOverlapBooking(resource._id)}
      >
        <CellInCalendar
          resource={resource}
          row={contentResource}
          indexResource={indexResource}
          sameRow={rowHover === indexResource}
          onBegin={beginSelection}
          onEnd={endSelection}
          onUpdate={updateSelection}
          startIndex={start}
          endIndex={end}
        />
      </RowBookingView>
    );
  });
  return renderCells;
};

export default RowInCalendar;
