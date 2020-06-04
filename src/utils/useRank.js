import { useState, useEffect } from 'react';
import { getNumberOfDay, compareByDay } from './Date';
import { HEIGHT_BOOKING } from '../containers/App/constant';

export function useRank(bookings) {
  const [ranks, setRanks] = useState({});
  useEffect(() => {}, [bookings]);
  const getMarginTopBooking = schedule => {
    let numberBookingOverlap = 0;
    let beforeSchedule = null;
    // sort ranks and length booking
    const workBookings = bookings
      .filter(
        booking =>
          schedule.resourceId === booking.resourceId &&
          booking._id !== schedule._id,
      )
      .sort((a, b) => ranks[a._id] - ranks[b._id])
      .sort(
        (a, b) =>
          getNumberOfDay(b.startDay, b.endDay) -
          getNumberOfDay(a.startDay, a.endDay),
      )
      .sort((a, b) => compareByDay(a.startDay, b.startDay));
    const startBookings = workBookings.filter(
      booking => compareByDay(schedule.startDay, booking.startDay) === 0,
    );
    const startRanks = ranks[schedule._id];
    workBookings.map(booking => {
      const isOverlapBookingStart =
        compareByDay(schedule.startDay, booking.startDay) > 0 &&
        compareByDay(schedule.startDay, booking.endDay) <= 0 &&
        ranks[schedule._id] === ranks[booking._id];
      if (isOverlapBookingStart) {
        ranks[schedule._id] += 1;
        numberBookingOverlap += 1;
        return booking;
      }
      return booking;
    });
    startBookings.map(booking => {
      if (startRanks > ranks[booking._id]) {
        beforeSchedule = booking;
      }
      if (startRanks < ranks[booking._id]) {
        ranks[booking._id] += numberBookingOverlap;
      }
      return booking;
    });
    const top =
      beforeSchedule === null
        ? ranks[schedule._id]
        : ranks[schedule._id] - ranks[beforeSchedule._id] - 1;
    const marginTop = `${top * HEIGHT_BOOKING}px`;
    return marginTop;
  };
  return [ranks, setRanks, getMarginTopBooking];
}
