/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@material-ui/core';

import Label from './Style/Label';
import {
  Wrapper,
  Utilization,
  InputDuration,
  ContainerRatio,
} from './Style/InputTimeRatio';
import BottomLine from './Style/BottomLine';
import UtilizeInput from './UtilizeInput';
import { HourInput, MinuteInput } from './DurationInput';
import { getUtilizeFromHours, getHours } from '../../utils/Utilize';

const InputTimeRatio = ({
  inDay = true,
  isDuration = true,
  value = { percent: 100, hours: 8, minutes: 0, rawHours: 8 },
  onChangeUtilize,
}) => {
  const { hours, minutes, percent } = value;
  const handleChangeMinute = inputMinutes => {
    const minute = hours === 8 ? 0 : inputMinutes;
    const per = getUtilizeFromHours(hours, minute);
    const rawHours = hours + Math.round((minutes / 60) * 100) / 100;
    onChangeUtilize(per, hours, minute, rawHours);
  };
  const handleChangeHour = inputHours => {
    const per = getUtilizeFromHours(inputHours, minutes);
    const rawHours = hours + Math.round((minutes / 60) * 100) / 100;
    onChangeUtilize(per, inputHours, minutes, rawHours);
  };
  const handleChangePercent = percent => {
    const { hours, minutes, rawHours } = getHours(percent);
    onChangeUtilize(percent, hours, minutes, rawHours);
  };
  if (isDuration)
    return (
      <Wrapper>
        <ContainerRatio>
          <InputDuration>
            <Label>Hours</Label>
            <TextField
              value={hours}
              onChange={handleChangeHour}
              InputProps={{
                inputComponent: HourInput,
              }}
            />
            <BottomLine />
          </InputDuration>
          <InputDuration>
            <Label>Minutes</Label>
            <TextField
              value={minutes}
              onChange={handleChangeMinute}
              InputProps={{
                inputComponent: MinuteInput,
              }}
            />
            <BottomLine />
          </InputDuration>
        </ContainerRatio>
        {!inDay && <span>per day</span>}
      </Wrapper>
    );
  return (
    <Utilization>
      <Label>Utilization</Label>
      <TextField
        value={percent}
        onChange={handleChangePercent}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: UtilizeInput,
        }}
      />
      <BottomLine />
    </Utilization>
  );
};
export default InputTimeRatio;
