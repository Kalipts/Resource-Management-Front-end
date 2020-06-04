/* eslint-disable react/prop-types */
import React from 'react';

import RowInCalendar from './RowCalendar';
import WrapperBodyCalendar from './TableCalendar/Style/BodyCalendar';
import ContainerBookingView from './TableCalendar/Style/ContainerBookingView';
import { getNumberOfDay } from '../../utils/Date';

const BodyCalendar = ({ size, startDay, endDay, isZoom }) => {
  const numberOfDays = getNumberOfDay(startDay, endDay) + 1;
  return (
    <WrapperBodyCalendar>
      <ContainerBookingView
        width={size.width}
        numberOfDays={numberOfDays}
        isZoom={isZoom}
      >
        <RowInCalendar />
      </ContainerBookingView>
    </WrapperBodyCalendar>
  );
};

export default BodyCalendar;
