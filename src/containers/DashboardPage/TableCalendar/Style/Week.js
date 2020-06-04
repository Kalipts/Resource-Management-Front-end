import styled from 'styled-components';
import {handleWidthWeek} from "../../../App/HandleConstant";
const Week = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-columns: repeat(${props => props.numberOfWeeks}, ${(props) => `${handleWidthWeek(props.isZoom)}px`});
`;
export default Week;
