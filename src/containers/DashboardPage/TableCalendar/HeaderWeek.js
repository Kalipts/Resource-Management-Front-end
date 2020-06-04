/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import WeekCell from './Style/WeekCell';
import {
  isFirstWeekOfMonth,
  getFormatMonthYear,
  getSpaceToDisplayMonth,
} from '../../../utils/Date';
import Month from './Style/Month';
import WeekName from './Style/WeekName';
import { CalendarContext } from '../../../context/Calendar';

export default function HeaderWeek(props) {
  const { weeks } = props;
  const calendarContext = useContext(CalendarContext);
  const { isZoom } = calendarContext;
  const renderHeaderWeek = weeks.map(week => {
    const { year, weekNumber, dayFirstWeek } = week;
    const isFirstWeek = isFirstWeekOfMonth(dayFirstWeek);
    const space = getSpaceToDisplayMonth(dayFirstWeek, weekNumber);
    const isOverlapWeekAndMonth = isFirstWeek && space === 0;
    const leftMonth = isOverlapWeekAndMonth ? space - 2 : 0;
    return (
      <WeekCell isZoom={isZoom} key={`${year} ${weekNumber}`}>
        {isFirstWeekOfMonth(dayFirstWeek) && (
          <Month isZoom={isZoom} left={getSpaceToDisplayMonth(dayFirstWeek)}>
            {getFormatMonthYear(dayFirstWeek, weekNumber)}
          </Month>
        )}
        <WeekName isZoom={isZoom} left={leftMonth}>
          Week {week.weekNumber}
        </WeekName>
      </WeekCell>
    );
  });
  return <>{renderHeaderWeek}</>;
}
