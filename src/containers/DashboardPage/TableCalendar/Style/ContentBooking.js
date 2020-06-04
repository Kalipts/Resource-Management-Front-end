import styled from 'styled-components';
import { WIDTH_CELL_IN_TABLE_CALENDAR, BORDER_CELL_IN_TABLE_CALENDAR } from '../../../App/constant';
const ContentBooking = styled.td`
  height: ${props => props.overlapBooking + 45 * 22 + 'px'};
  width: ${WIDTH_CELL_IN_TABLE_CALENDAR - BORDER_CELL_IN_TABLE_CALENDAR + 'px'};
  border-right: 1px solid #e1e7ed;
  border-bottom: 1px solid #e1e7ed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color:${props=>props.isWeekend ? '#FEFAF7' :'#FFFFFF'};
`;
export default ContentBooking;
