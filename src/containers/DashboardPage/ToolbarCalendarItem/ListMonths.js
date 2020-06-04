import React from 'react';

import PropTypes from 'prop-types';
import { NUMBERS_OF_MONTHS } from '../../App/constant';
import MonthPicker from './style/MonthPicker';
import ListMonthsItem from './ListMonthsItem';

export default function ListMonths({ changeMonth = () => {}, month = -1 }) {
  const listMonths = [...Array(NUMBERS_OF_MONTHS).keys()];
  return (
    <MonthPicker>
      {listMonths.map(m => (
        <ListMonthsItem
          key={m}
          value={m}
          month={m}
          changeMonth={changeMonth}
          selectedMonth={month}
        ></ListMonthsItem>
      ))}
    </MonthPicker>
  );
}
ListMonths.propTypes = {
  month: PropTypes.number,
  changeMonth: PropTypes.func,
};
