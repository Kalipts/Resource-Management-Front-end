import styled from 'styled-components';
import {
  HEIGHT_HEADER_DATE,
  NUMBER_OF_DAYS_IN_WEEK,
} from '../../../App/constant';
import handleWidth from '../../../App/HandleConstant';
const WeekCell = styled.div`
  font-size: 12px;
  font-weight: 500;
  border-right: 1px solid #e9e9e9;
  text-align: inherit;
  width: ${props =>
    `${handleWidth(props.isZoom) * NUMBER_OF_DAYS_IN_WEEK - 1}px`};
  height: ${`${HEIGHT_HEADER_DATE}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default WeekCell;
