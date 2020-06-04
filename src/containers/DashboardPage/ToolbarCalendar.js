import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './ToolbarCalendarItem/style/Toolbar';
import HeaderToolbar from './ToolbarCalendarItem/style/HeaderToolbar';
import { useWindowSize } from '../../utils/Window';
import { CalendarContext } from '../../context/Calendar';
import ListMonths from './ToolbarCalendarItem/ListMonths';
import ListYears from './ToolbarCalendarItem/ListYears';
import Zoom from './ToolbarCalendarItem/Zoom';

export default function ToolbarCalendar({
  year,
  month,
  handleOnChangeMonth,
  handleOnChangeYear,
}) {
  const calendarContext = useContext(CalendarContext);
  const { isZoom, setIsZoom } = calendarContext;
  const [size] = useWindowSize();
  const [isZoomed, setIsZoomed] = useState(false);
  const changeMonth = m => {
    if (typeof m === 'number') {
      handleOnChangeMonth(m);
    }
  };
  const changeYear = evt => {
    handleOnChangeYear(evt.target.value);
  };
  const changeZoom = () => {
    setIsZoomed(!isZoomed);
    setIsZoom(!isZoom);
  };

  return (
    <Toolbar width={size.width}>
      <HeaderToolbar>Calendar</HeaderToolbar>
      <ListYears year={year} changeYear={changeYear}></ListYears>
      <ListMonths changeMonth={changeMonth} month={month}></ListMonths>
      <Zoom changeZoom={changeZoom} isZoomed={isZoomed}></Zoom>
    </Toolbar>
  );
}
ToolbarCalendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  handleOnChangeMonth: PropTypes.func,
  handleOnChangeYear: PropTypes.func,
};
