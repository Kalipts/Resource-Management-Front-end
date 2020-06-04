import styled from 'styled-components';
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  font-weight: 500;
  text-align: inherit;
  border-right: 1px solid ${props => props.theme.color.borderBookingView};
  color: ${props =>
    props.isWeekend
      ? props.theme.color.primary
      : props.theme.color.fontDefault};
`;
export default Day;
