import React, { useState, useContext } from 'react';

import Booking from './Booking';
import { CalendarContext } from '../../../context/Calendar';

const BookingInCell = ({ bookings = [], resource }) => {
  const { handleCloseModal, setContentGlobal } = useContext(CalendarContext);
  const [isDrop, setIsDrop] = useState(true);
  if (!isDrop) return null;
  return bookings.map((booking, index) => (
    <Booking
      onClick={e => {
        if (e == null) {
          return;
        }
        setContentGlobal({
          resource,
          booking,
          startDate: booking.startDay,
          endDate: booking.endDay,
        });
        handleCloseModal();
      }}
      key={booking._id}
      color="green"
      isFirst={index === 0}
      booking={booking}
      setIsDrop={setIsDrop}
    />
  ));
};

export default BookingInCell;
