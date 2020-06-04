import {
  isWeekend,
  compareByDay,
  getNumberOfDay,
  isDayInDuartion,
} from './Date';
import { getAvgHours } from './Utilize';

export const isSameReource = (first, end) =>
  first.resourceId === end.resourceId;
export const isSameBooking = (first, end) => first._id === end._id;
export const sumHoursByDay = (schedules, hour) => {
  const { schedulesByDay } = schedules;
  const sumHoursSchedules = schedulesByDay.reduce(
    (acc, schedule) => acc + getAvgHours(schedule),
    hour,
  );
  return sumHoursSchedules;
};
export const checkOvertimeNewBooking = (newBooking, bookings) => {
  // check booking is weekend
  if (isWeekend(newBooking.startDay)) {
    return true;
  }
  const day = newBooking.startDay.clone();
  const length = getNumberOfDay(newBooking.startDay, newBooking.endDay) + 1;
  const schedules = bookings.filter(
    booking =>
      (isDayInDuartion(booking.startDay, booking.endDay, newBooking.startDay) ||
        isDayInDuartion(booking.startDay, booking.endDay, newBooking.endDay)) &&
      isSameReource(booking, newBooking) &&
      !isSameBooking(newBooking, booking),
  );
  const schedulesByDays = [];
  for (let i = 0; i < length; i += 1) {
    const schedulesByDay = schedules.filter(
      booking =>
        compareByDay(booking.startDay, day) <= 0 &&
        compareByDay(booking.endDay, day) >= 0,
    );
    if (schedulesByDay.length !== 0) {
      schedulesByDays.push({ schedulesByDay, day });
    }
    day.add(1, 'days');
  }
  let isOverTime = false;
  schedulesByDays.map(item => {
    if (!isOverTime) {
      const sumHoursSchedules = sumHoursByDay(item, getAvgHours(newBooking));
      isOverTime = sumHoursSchedules > 8;
    }
    return item;
  });
  return isOverTime;
};

export const isBetween = (value, a, b) => {
  if (a < b) return a <= value && value <= b;
  return a >= value && value >= b;
};
