import styled from 'styled-components';
import { BORDER_CELL_IN_TABLE_CALENDAR } from '../../App/constant';
import { CES_WHITE } from '../../../constants/colorTypes';
import handleWidth from '../../App/HandleConstant';

const ContentBooking = styled.div`
  padding-bottom: 9px;
  padding-top: 10px;
  width: ${props =>
    `${handleWidth(props.isZoom) - BORDER_CELL_IN_TABLE_CALENDAR}px`};
  border-right: 1px solid ${props => props.theme.color.borderCellCalendar};
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${props =>
    props.isWeekend ? props.theme.color.weekendBackground : CES_WHITE};
  background-color: ${props => props.inputColor} !important;
`;
export default ContentBooking;
