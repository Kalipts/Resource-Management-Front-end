import styled from 'styled-components';
const BookingText = styled.div`
  color: ${props => props.theme.color.none};
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  margin-left: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  overflow: hidden;
`;
export default BookingText;
