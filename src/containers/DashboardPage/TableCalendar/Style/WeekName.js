import styled from 'styled-components';
import handleWidth from '../../../App/HandleConstant';
const WeekName = styled.span`
  height: 15px;
  width: 50px;
  opacity: 0.7;
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  margin-left: ${props => `${props.left * handleWidth(props.isZoom)}px`};
`;
export default WeekName;
