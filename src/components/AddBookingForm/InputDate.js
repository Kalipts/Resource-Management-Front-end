import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-datepicker';
import * as moment from 'moment';
import PropTypes from 'prop-types';

import Label from './Style/Label';
import BottomLine from './Style/BottomLine';
import AlertInput from './AlertInput';
import iconDate from '../../images/calendar.svg';

const Wrapper = styled.div`
  position: relative;
  width: 140px;
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`;

const Date = styled.div`
  display: flex;
  img {
    margin-left: 22px;
  }
`;

const InputDate = props => {
  const { day, label, handleChange, errors } = props;
  const [selectedDay, setSelectedDay] = useState(moment(day.toString()));
  const inputRef = useRef();
  useEffect(() => {
    setSelectedDay(moment(day).format('DD MMM, YYYY'));
  }, [day]);

  const handleChangeDay = date => {
    const newDateFormat = moment(date.toString());
    handleChange(newDateFormat);
    setSelectedDay(newDateFormat.format('DD MMM, YYYY'));
  };

  return (
    <Wrapper ref={inputRef}>
      <Label>{label}</Label>
      <Date>
        <DayPickerInput
          value={selectedDay}
          selected={moment(selectedDay.toString()).toDate()}
          className="ces-day-pick"
          onChange={handleChangeDay}
          onSelect={handleChangeDay}
          dateFormat="dd MMM, yyyy"
        />
        <img alt="" src={iconDate} />
      </Date>
      {errors && (
        <AlertInput
          open={errors !== undefined}
          message={errors}
          anchor={inputRef.current}
        ></AlertInput>
      )}
      <BottomLine />
    </Wrapper>
  );
};
InputDate.propTypes = {
  handleChange: PropTypes.func,
  day: PropTypes.instanceOf(moment),
  label: PropTypes.string,
  errors: PropTypes.string,
};

export default InputDate;
