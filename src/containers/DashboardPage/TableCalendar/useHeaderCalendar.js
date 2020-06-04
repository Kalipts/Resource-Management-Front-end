import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { getNumberOfDay } from '../../../utils/Date';

export default function useHeaderCalendar(startDay, endDay) {
  const [dates, setDates] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const createDates = useCallback(() => {
    let nowDay = moment(startDay);
    const length = getNumberOfDay(startDay, endDay) + 1;
    const generateDateForHeader = () => {
      const weekDayName = nowDay.format('ddd');
      const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
      const day = nowDay.format('DD');
      const newDate = {
        weekDayName,
        isWeekend,
        day,
        nowDay: nowDay.toString(),
      };
      nowDay = nowDay.add(1, 'days');
      return newDate;
    };
    const initialDates = new Array(length).fill(0).map(generateDateForHeader);
    setDates([...initialDates]);
    return initialDates;
  }, [startDay, endDay]);
  const createWeeks = useCallback(() => {
    const length = getNumberOfDay(startDay, endDay) + 1;
    const numberOfWeek = Math.round(length / 7);
    const generateWeekForCalendar = (week, index) => {
      const weekInCell = moment(startDay)
        .clone()
        .add(index * 7, 'days')
        .startOf('isoWeek');
      const weekNumber = weekInCell.week();
      const year = weekInCell.year();
      return { weekNumber, year, dayFirstWeek: weekInCell };
    };
    const initialWeeks = new Array(numberOfWeek)
      .fill(0)
      .map(generateWeekForCalendar);
    setWeeks([...initialWeeks]);
    return initialWeeks;
  }, [startDay, endDay]);
  useEffect(() => {
    createDates();
    createWeeks();
    return () => {};
  }, [createDates, createWeeks]);

  return { dates, weeks };
}
