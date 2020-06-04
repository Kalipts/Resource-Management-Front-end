import React, { useContext, useRef, useState } from 'react';

import { useWindowSize } from '../../utils/Window';
import { CalendarContext } from '../../context/Calendar';

import BodyCalendar from './BodyCalendar';
import Container from './TableCalendar/Style/Container';
import AddBookingForm from '../../components/AddBookingForm';
import AlertDialog from '../../components/Diaglog/AlertDiaglog';
import DateBooking from './TableCalendar/Style/DateBooking';
import HeaderCalendar from './TableCalendar/HeaderCalendar';
import Sidebar from './ResourceBar/Sidebar';

function TableCalendar() {
  const [size] = useWindowSize();
  const calendarContext = useContext(CalendarContext);
  const {
    getMaxTotalOverlapBooking,
    startDay,
    endDay,
    contentGlobal,
    overTime,
    updateOnOvertime,
    handleOnCloseAlert,
    handleOnChangeMonth,
    handleOnChangeYear,
    month,
    year,
    isZoom,
  } = calendarContext;
  const ref = useRef({ current: { scrollTop: 0 } });
  const handleIncreaseMonth = () => {
    const isLastMonth = month === 11;
    if (isLastMonth) {
      handleOnChangeYear(1 + Number(year));
      handleOnChangeMonth(0);
      return;
    }
    handleOnChangeMonth(month + 1);
  };
  const handleDecreaseMonth = () => {
    const isFirst = month === 0;
    if (isFirst) {
      handleOnChangeYear(year - 1);
      handleOnChangeMonth(11);
      return;
    }
    handleOnChangeMonth(month - 1);
  };
  const checkOnBoundScroll = e => {
    e.stopPropagation();
    const { clientWidth, scrollWidth, scrollLeft, scrollTop } = ref.current;
    const isRightBound = scrollLeft + clientWidth === scrollWidth;
    const isLeftBound = scrollLeft === 0;
    if (isRightBound) {
      handleIncreaseMonth();
      ref.current.scrollLeft = 1;
    }
    if (isLeftBound) {
      handleDecreaseMonth();
      ref.current.scrollLeft = 1;
    }
    const target = document.getElementById('resource_list');
    target.scrollTop = scrollTop;
  };
  const handleOnAgreeOvertime = async () => {
    await updateOnOvertime(overTime.newBooking);
  };

  const onWheel = e => {
    e.stopPropagation();
    const container = document.getElementById('schedule');
    const containerScrollPosition = document.getElementById('schedule')
      .scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth',
    });
  };

  return (
    <Container height={size.height} width={size.width}>
      <Sidebar getMaxTotalOverlapBooking={getMaxTotalOverlapBooking} />
      <DateBooking
        ref={ref}
        height={size.height}
        onScroll={checkOnBoundScroll}
        id="schedule"
        onWheel={onWheel}
      >
        <HeaderCalendar startDay={startDay} endDay={endDay} />
        <BodyCalendar
          size={size.width}
          startDay={startDay}
          endDay={endDay}
          isZoom={isZoom}
        />
      </DateBooking>
      <AddBookingForm content={contentGlobal()} />
      <AlertDialog
        title="Overtime"
        diaglog="Do you want to create overtime?"
        open={overTime.isOver}
        handleOnAccept={handleOnAgreeOvertime}
        handleOnDisagree={handleOnCloseAlert}
      />
    </Container>
  );
}

export default TableCalendar;
