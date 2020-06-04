import moment from 'moment';

export const getNumberOfDay = (startDay, endDay) => {
  const start = moment(startDay).clone();
  const end = moment(endDay).clone();
  return end.diff(start, 'days');
};
export const compareByDay = (firstDay, secondDay) => {
  const cloneFirstStart = firstDay.clone().startOf('day');
  const cloneSecondStart = secondDay.clone().startOf('day');
  return cloneFirstStart.diff(cloneSecondStart, 'days');
};
export function isIncludeWeekend(startDate, endDate) {
  const startDateClone = startDate.format('MMM DD, YYYY');
  const endDateClone = endDate.format('MMM DD, YYYY');

  const startDateNew = new Date(startDateClone);
  const endDateNew = new Date(endDateClone);
  let isWeekendCheck = false;

  while (startDateNew < endDateNew) {
    const day = startDateNew.getDay();
    isWeekendCheck = day === 6 || day === 0;
    if (isWeekendCheck) {
      return true;
    }
    startDateNew.setDate(startDateNew.getDate() + 1);
  }
  return false;
}
export function isWeekend(day) {
  const dayFormat = moment(day)
    .clone()
    .format('ddd')
    .toString();
  return dayFormat === 'Sat' || dayFormat === 'Sun';
}
export function getNumberOfWeekends(startDay, endDay) {
  const current = moment(startDay.toString()).clone();
  let number = 0;
  if (compareByDay(startDay, endDay) > 0) {
    return 0;
  }
  while (current.day(7).isBefore(endDay)) {
    number += 1;
  }
  return number;
}
export function isDayInDuartion(start, end, day) {
  return compareByDay(day, start) >= 0 && compareByDay(day, end) <= 0;
}
function weekOfMonth(date) {
  let weekInYearIndex = date.week();
  if (date.year() !== date.weekYear()) {
    weekInYearIndex =
      date
        .clone()
        .subtract(1, 'week')
        .week() + 1;
  }
  const weekIndex =
    weekInYearIndex -
    moment(date)
      .startOf('month')
      .week() +
    1;
  return weekIndex >= 5 ? 1 : weekIndex;
}
export function isFirstWeekOfMonth(day) {
  return weekOfMonth(day) === 1;
}
export function getFormatMonthYear(day) {
  return moment(day)
    .endOf('isoweek')
    .format('MMM YYYY');
}
export function getSpaceToDisplayMonth(day) {
  const lastWeek = moment(day)
    .add(6, 'days')
    .format('MMM YYYY');
  return getNumberOfDay(day, lastWeek) - 3;
}
export function generationDuration(month, year) {
  const start = moment()
    .months(month)
    .years(year)
    .startOf('months');
  const end = moment()
    .months(month)
    .years(year)
    .endOf('months');
  const startDay = start.startOf('isoweek');
  const endDay = end.endOf('isoweek');
  return { startDay, endDay };
}
