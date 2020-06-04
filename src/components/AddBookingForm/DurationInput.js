/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { isValidHour, isValidMinute } from '../../utils/Utilize';

const StyledDurationInput = styled(NumberFormat)`
  color: #000000;
  font-size: 14px;
  line-height: 18px;
`;

export const HourInput = props => {
  const { inputRef, onChange, ...other } = props;
  function format(value) {
    const hour = Number(value);
    const isValidate = hour < 0 || hour > 8;
    if (isValidate) return '8';
    return value;
  }
  function handleOnBlur(e) {
    if (e.target.value === '') onChange(8);
  }
  function handleChangeInput(target) {
    const { value } = target;
    onChange(Number(value));
  }
  return (
    <StyledDurationInput
      {...other}
      getInputRef={inputRef}
      displayType="number"
      onValueChange={handleChangeInput}
      format={format}
      onBlur={handleOnBlur}
    />
  );
};

export const MinuteInput = props => {
  const { inputRef, onChange, ...other } = props;
  function format(value) {
    if (!isValidMinute(value)) return '0';
    return value;
  }
  function handleOnBlur(e) {
    if (e.target.value === '') onChange(0);
  }
  function handleChangeInput(target) {
    const { value } = target;
    onChange(Number(value));
  }
  return (
    <StyledDurationInput
      {...other}
      getInputRef={inputRef}
      displayType="number"
      onValueChange={handleChangeInput}
      format={format}
      onBlur={handleOnBlur}
    />
  );
};
