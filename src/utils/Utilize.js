import { getNumberOfDay, getNumberOfWeekends, compareByDay } from './Date';
import { HOURS_IN_DAY, MAX_UTILIZE } from '../containers/App/constant';

export const getHoursFromUtilize = (startDay, endDay, utilize) => {
  const totalDays =
    getNumberOfDay(startDay, endDay) +
    1 -
    2 * getNumberOfWeekends(startDay, endDay);
  const rawMinutes = (totalDays * (HOURS_IN_DAY * 60 * utilize)) / MAX_UTILIZE;
  const hours = Math.floor(rawMinutes / 60);
  const minutes = Math.floor(rawMinutes - hours * 60);
  const rawHours = hours + Math.round((minutes / 60) * 100) / 100;
  return { hours, minutes, rawHours };
};

export const getUtilizeFromHours = (hours, minutes) =>
  Math.floor(((hours * 60 + minutes) / (HOURS_IN_DAY * 60)) * MAX_UTILIZE);

export const getHours = utilize => {
  const rawMinutes = (HOURS_IN_DAY * 60 * utilize) / MAX_UTILIZE;
  const hours = Math.floor(rawMinutes / 60);
  const minutes = Math.floor(rawMinutes - hours * 60);
  const rawHours = hours + Math.round((minutes / 60) * 100) / 100;
  return { hours, minutes, rawHours };
};

export const getLengthOfBooking = (startDay, endDay, booking) => {
  const start =
    compareByDay(startDay, booking.startDay) > 0 ? startDay : booking.startDay;
  const end =
    compareByDay(endDay, booking.endDay) < 0 ? endDay : booking.endDay;
  return getNumberOfDay(start, end) + 1;
};
export const getAvgHours = booking => {
  const hours = getHoursFromUtilize(
    booking.startDay,
    booking.endDay,
    booking.utilize,
  ).rawHours;
  return hours / (getNumberOfDay(booking.startDay, booking.endDay) + 1);
};

export const isValidHour = hour => {
  const pattern = /^(2[0-4]|1[0-9]|[1-9]|0[1-9])$/;
  return pattern.test(hour);
};

export const isValidMinute = minute => {
  const pattern = /^[1-5]?[0-9]$/;
  return pattern.test(minute);
};
