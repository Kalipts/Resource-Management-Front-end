import React from 'react';
import PropTypes from 'prop-types';
import { MIN_OFFSET_YEAR, MAX_OFFSET_YEAR } from '../../App/constant';
import { range } from '../../../utils/Util';
import YearPickerItem from './style/YearPickerItem';
import YearPicker from './style/YearPicker';

export default function ListYears({ changeYear = () => {}, year = -1 }) {
  const allYears = [...Array.from(range(MIN_OFFSET_YEAR, MAX_OFFSET_YEAR))];

  return (
    <YearPicker value={year} onChange={changeYear}>
      {allYears.map(y => (
        <YearPickerItem key={y} value={y}>
          {y}
        </YearPickerItem>
      ))}
    </YearPicker>
  );
}
ListYears.propTypes = {
  year: PropTypes.number,
  changeYear: PropTypes.func,
};
