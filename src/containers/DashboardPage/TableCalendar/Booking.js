/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';

import BookingCard from './Style/BookingCard';
import BookingText from './Style/BookingContent';
import BookingTime from './Style/BookingTime';
import { CalendarContext } from '../../../context/Calendar';
import IconButton from '../../../components/shared/IconButton';

import Close from './Style/Close';
import ItemTypes from './ItemTypes';
import {
  getHoursFromUtilize,
  getLengthOfBooking,
} from '../../../utils/Utilize';

import LoadingIcon from '../../../components/shared/IconLoading';
import { compareByDay } from '../../../utils/Date';
import { isEmpty } from '../../../utils/Util';
import WrapperDelete from './Style/WrapperDelete';

export default function Booking({ booking = { _id: '' }, onClick }) {
  const { utilize, project, _id } = booking;
  const { color, name } = project;
  const calendarContext = useContext(CalendarContext);
  const {
    getMarginTopBooking,
    removeBooking,
    updateOnDidDragBooking,
    isDragLoading,
    bookingId,
    isZoom,
    startDay,
    endDay,
  } = calendarContext;
  const endDragBooking = async (item, monitor) => {
    const dropResult = monitor.getDropResult();
    // handle when drop outside
    if (isEmpty(dropResult)) {
      return;
    }
    const { resource, date } = monitor.getDropResult();
    const isNotMoving =
      compareByDay(booking.startDay, date) === 0 &&
      booking.resourceId === resource;
    if (isNotMoving) {
      return;
    }
    await updateOnDidDragBooking(booking, resource, date);
  };
  const collectBooking = monitor => ({
    isDragging: !!monitor.isDragging(),
    opacity: 1,
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.BOOKING, booking },
    end: endDragBooking,
    collect: collectBooking,
  });
  const [isHover] = useState(false);
  const length = getLengthOfBooking(startDay, endDay, booking);
  const { hours, minutes } = getHoursFromUtilize(
    booking.startDay,
    booking.endDay,
    utilize,
  );
  const top = getMarginTopBooking(booking);
  const handleClick = () => {
    removeBooking(_id);
  };
  const preventPropagation = e => {
    e.stopPropagation();
  };
  const Loading = () =>
    isDragLoading && bookingId === booking._id ? <LoadingIcon /> : null;

  return (
    <BookingCard
      isZoom={isZoom}
      isDragging={isDragging}
      length={length}
      color={color}
      top={top}
      ref={drag}
      onClick={onClick}
      onMouseUp={preventPropagation}
      onMouseDown={preventPropagation}
    >
      <Loading />
      <BookingText>{name}</BookingText>
      <BookingTime isHovered={isHover}>
        {hours}h {minutes === 0 ? '' : `${minutes}m`}
      </BookingTime>
      <WrapperDelete>
        <IconButton
          handleClick={handleClick}
          onKeyDown={handleClick}
          inputProps={<Close />}
        />
      </WrapperDelete>
    </BookingCard>
  );
}
