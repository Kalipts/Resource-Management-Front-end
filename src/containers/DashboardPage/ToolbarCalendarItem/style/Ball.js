import styled from 'styled-components';
const Ball = styled.div`
  position: absolute;
  height: 21px;
  width: 21px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-left: ${props => (props.isZoomed ? '13px' : '-16px')};
`;
export default Ball;
