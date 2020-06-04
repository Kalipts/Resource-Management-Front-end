import React from 'react';
import styled from 'styled-components';

import { CES_GREY } from '../../../constants/colorTypes';
import SelectedBooking from './SelectBooking';

const HeaderBooking = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  height: 40px;
  display: block;
`;

const GridHeader = styled.div`
  padding-right: 8px;
  height: 100%;
  display: flex;
`;

const Line = styled.div`
  box-sizing: border-box;
  height: 1px;
  width: 100%;
  border: 1px solid ${CES_GREY};
  margin-top: 1px;
`;

const Header = props => (
  <HeaderBooking>
    <GridHeader>
      <SelectedBooking isActive>New Booking</SelectedBooking>
      <SelectedBooking>New Time Off</SelectedBooking>
    </GridHeader>
    <Line />
  </HeaderBooking>
);

export default Header;
