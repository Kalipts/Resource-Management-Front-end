import styled from 'styled-components';
import BookingCard from './BookingCard';
const WrapperDelete = styled.div`
  display: none;
  ${BookingCard}:hover & {
    display: inline;
  }
  ${BookingCard}:active & {
    display: none;
  }
`;
export default WrapperDelete;
