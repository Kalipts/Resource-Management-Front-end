import styled from 'styled-components';
import { HEIGHT_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
import { CES_ORANGE_HOVER, CES_WHITE } from '../../../../constants/colorTypes';
import ContentBooking from '../ContentBooking';

const RowBookingView = styled.div`
  min-height: ${() => `${HEIGHT_CELL_IN_TABLE_CALENDAR}px`};
  position: relative;
  display: flex;
  flex-direction: row;
  &:active ${ContentBooking} {
    background-color: ${CES_WHITE};
  }
  &:hover ${ContentBooking} {
    background-color: ${props => (props.hover ? CES_ORANGE_HOVER : 'none')};
  }
`;
export default RowBookingView;
