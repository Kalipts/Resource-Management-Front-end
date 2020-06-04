import styled from 'styled-components';
import handleWidth from '../../../App/HandleConstant';

const BookingCard = styled.div`
  height: 26px;
  width: ${props => `${Number(props.length) * handleWidth(props.isZoom)}px`};
  border-radius: 1px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  position: relative;
  margin-top: ${props => props.top};
  opacity: ${props => (props.isDragging ? 0.2 : 1)};
  cursor: pointer;
`;
export default BookingCard;
