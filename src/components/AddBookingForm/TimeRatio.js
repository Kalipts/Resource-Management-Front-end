/* eslint-disable react/prop-types */
import React from 'react';

import { Percent, Duration, ContainerRatio } from './Style/TimeRatio';
import { QuarterIcon, ClockIcon } from '../../images/RatioSVG';

const TimeRatio = ({ active = false, onChange = () => {} }) => (
  <ContainerRatio>
    <Percent active={!active} onClick={onChange}>
      <QuarterIcon active={!active} />
      <div>Percentage</div>
    </Percent>
    <Duration active={active} onClick={onChange}>
      <ClockIcon active={active} />
      <div>Duration</div>
    </Duration>
  </ContainerRatio>
);

export default TimeRatio;
