/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledUtilizeInput = styled(NumberFormat)`
  color: #000000;
  font-size: 14px;
  line-height: 18px;
`;

export default function UtilizeInput(props) {
  const { inputRef, onChange, ...other } = props;
  function limit(val) {
    let numberPercent = val.replace('%', '');
    const isValidate = Number(numberPercent) > 100 || numberPercent.length > 2;
    if (isValidate) {
      numberPercent = '100';
    }
    return `${numberPercent}%`;
  }
  function handleOnBlur(e) {
    if (e.target.value === '') onChange(100);
  }
  return (
    <StyledUtilizeInput
      {...other}
      getInputRef={inputRef}
      displayType="number"
      onValueChange={values => {
        onChange(Number(values.value));
      }}
      thousandSeparator
      suffix="%"
      format={limit}
      onBlur={handleOnBlur}
    />
  );
}

UtilizeInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
