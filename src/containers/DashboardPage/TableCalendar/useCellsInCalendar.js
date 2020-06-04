import { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { getNumberOfDay } from '../../../utils/Date';
import { CalendarContext } from '../../../context/Calendar';
import { ResourceContext } from '../../../context/Resource';

export default function useCellsInCalendar(startDay, endDay) {
  const [cells, setCells] = useState([]);
  const calendarContext = useContext(CalendarContext);
  const { searchResult } = useContext(ResourceContext);
  const { getBookingWithResource } = calendarContext;
  useEffect(() => {
    const arrays = new Array(searchResult.length).fill(0);
    const generateCellCalendar = (row, indexResource) => {
      const numberOfdays = getNumberOfDay(startDay, endDay) + 1;
      const generateCellCalendarWithResource = (cell, i) => {
        const dateInCell = moment(startDay.toString()).add(i, 'days');
        const weekDayName = dateInCell.format('ddd');
        const isWeekend = weekDayName === 'Sun' || weekDayName === 'Sat';
        const bookingsInCell = getBookingWithResource(
          dateInCell,
          indexResource,
        );
        return {
          dateInCell,
          weekDayName,
          isWeekend,
          bookingsInCell,
        };
      };
      const contentResource = new Array(numberOfdays)
        .fill(0)
        .map(generateCellCalendarWithResource);
      const resource = searchResult[indexResource];
      return { contentResource, resource };
    };

    const cellsInCalendars = arrays.fill(0).map(generateCellCalendar);
    setCells([...cellsInCalendars]);

    return () => {};
  }, [searchResult, startDay, endDay, getBookingWithResource]);

  return { cells };
}
