import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import MonthPickerItem from './style/MonthPickerItem';
import MonthPickerItemText from './style/MonthPickerItemText';

export default function ListMonthsItem({
  changeMonth = () => {},
  month = -1,
  selectedMonth = -2,
}) {
  return (
    <MonthPickerItem>
      <MonthPickerItemText
        selected={month === selectedMonth}
        onClick={e => {
          changeMonth(month);
          e.stopPropagation();
        }}
      >
        {moment()
          .month(month)
          .format('MMM')}
      </MonthPickerItemText>
    </MonthPickerItem>
  );
}
ListMonthsItem.propTypes = {
  month: PropTypes.number,
  selectedMonth: PropTypes.number,
  changeMonth: PropTypes.func,
};
