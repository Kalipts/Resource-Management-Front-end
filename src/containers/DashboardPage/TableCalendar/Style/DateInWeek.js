import styled from 'styled-components';
import handleWidth from '../../../App/HandleConstant';
const DateInWeek = styled.div`
  border-bottom: 1px solid #e9e9e9;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.numberOfDays},
    ${props => `${handleWidth(props.isZoom)}px`}
  );
`;
export default DateInWeek;
