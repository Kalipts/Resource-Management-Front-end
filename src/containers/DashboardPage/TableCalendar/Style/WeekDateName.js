import styled from 'styled-components';
const WeekDayName = styled.div`
  height: 15px;
  width: 20px;
  opacity: ${props => (props.isWeekend ? 1 : 0.5)};
  font-size: 12px;
  line-height: 15px;
`;
export default WeekDayName;
