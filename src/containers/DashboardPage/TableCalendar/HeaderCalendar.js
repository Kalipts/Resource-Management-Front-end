import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ContainerDate from './Style/ContainerDate';
import BodyDate from './Style/BodyDate';
import Week from './Style/Week';
import DateInWeek from './Style/DateInWeek';
import HeaderDay from './HeaderDay';

import HeaderWeek from './HeaderWeek';
import useHeaderCalendar from './useHeaderCalendar';
import { CalendarContext } from '../../../context/Calendar';

function HeaderCalendar({ startDay, endDay }) {
  const { dates, weeks } = useHeaderCalendar(startDay, endDay);

  const calendarContext = useContext(CalendarContext);
  const { isZoom } = calendarContext;

  return (
    <ContainerDate>
      <BodyDate>
        <Week isZoom={isZoom} numberOfWeeks={weeks.length}>
          <HeaderWeek weeks={weeks}></HeaderWeek>
        </Week>
        <DateInWeek isZoom={isZoom} numberOfDays={dates.length}>
          <HeaderDay dates={dates}></HeaderDay>
        </DateInWeek>
      </BodyDate>
    </ContainerDate>
  );
}
HeaderCalendar.propTypes = {
  startDay: PropTypes.instanceOf(moment),
  endDay: PropTypes.instanceOf(moment),
};
export default HeaderCalendar;
