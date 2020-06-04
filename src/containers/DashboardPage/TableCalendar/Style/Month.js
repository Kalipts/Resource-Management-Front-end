import styled from 'styled-components';
import handleWidth from '../../../App/HandleConstant';
const Month = styled.span`
  height: 13px;
  width: 46px;
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  display: block;
  top: 20%;
  margin-left: ${props => `${props.left * handleWidth(props.isZoom)}px`};
`;
export default Month;
