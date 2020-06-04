import React from 'react';
import PropTypes from 'prop-types';

import ContentWeek from './Style/ContentWeek';
import WeekDayName from './Style/WeekDateName';
import Day from './Style/Day';

export default function HeaderDay(props) {
  const { dates } = props;

  const renderHeaderDays = dates.map(date => (
    <Day
      key={`${date.weekDayName}${date.day}${date.nowDay.toString()}`}
      isWeekend={date.isWeekend}
      numberOfDays={dates.length}
    >
      <ContentWeek>
        <WeekDayName isWeekend={date.isWeekend}>{date.weekDayName}</WeekDayName>
        <span>{date.day}</span>
      </ContentWeek>
    </Day>
  ));
  return <>{renderHeaderDays}</>;
}
HeaderDay.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      weekDayName: PropTypes.string,
      isWeekend: PropTypes.bool,
      day: PropTypes.string,
      nowDay: PropTypes.string,
    }),
  ),
};
