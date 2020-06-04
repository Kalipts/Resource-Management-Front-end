import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import moment from 'moment';
import composeRefs from '@seznam/compose-react-refs';
import ItemTypes from './ItemTypes';
import ContentBooking from './ContentBooking';
import { compareByDay, getNumberOfDay } from '../../../utils/Date';
import { CalendarContext } from '../../../context/Calendar';
import handleWidth from '../../App/HandleConstant';

export default function DropTargetCell(props) {
  const {
    onMouseDown,
    onMouseUp,
    onMouseMove,
    inputColor,
    onMouseEnter,
    onMouseLeave,
    isWeekend,
    resourceId,
  } = props;
  const calendarContext = useContext(CalendarContext);
  const { startDay, isZoom } = calendarContext;

  const ref = useRef(null);

  const getDistanceChangeDate = monitor => {
    const coorDragSource = monitor.getInitialSourceClientOffset();
    const coorSource = monitor.getSourceClientOffset();
    const distance = Math.floor(
      (coorSource.x - coorDragSource.x) / handleWidth(isZoom),
    );
    return distance;
  };
  const getDateDropForOverBooking = (dateDrop, booking) => {
    const distance = getNumberOfDay(startDay, dateDrop);
    const newDates = moment(booking.startDay.toString());
    return newDates.add(distance, 'days');
  };
  const handleOnDropBooking = (item, monitor) => {
    const { booking } = monitor.getItem();
    const dateDrop = booking.startDay
      .clone()
      .add(getDistanceChangeDate(monitor), 'days');
    if (compareByDay(startDay, booking.startDay) <= 0) {
      return { resource: resourceId, date: dateDrop };
    }
    return {
      resource: resourceId,
      date: getDateDropForOverBooking(dateDrop, booking),
    };
  };
  const collectDropBooking = monitor => ({
    isOver: monitor.isOver({ swallow: true }),
  });
  const [, drop] = useDrop({
    accept: ItemTypes.BOOKING,
    drop: handleOnDropBooking,
    collect: collectDropBooking,
  });
  return (
    <ContentBooking
      ref={composeRefs(ref, drop)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      inputColor={inputColor}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isWeekend={isWeekend}
      isZoom={isZoom}
    >
      {props.children}
    </ContentBooking>
  );
}
DropTargetCell.propTypes = {
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseMove: PropTypes.func,
  inputColor: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isWeekend: PropTypes.bool,
  resourceId: PropTypes.string,
  children: PropTypes.node,
};
