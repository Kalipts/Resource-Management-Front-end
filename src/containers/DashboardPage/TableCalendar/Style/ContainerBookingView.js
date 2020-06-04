import styled from 'styled-components';
import handleWidth from '../../../App/HandleConstant';
const ContainerBookingView = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0px;
  position: relative;
  padding-bottom: 0px;
  width: ${props => `${props.numberOfDays * handleWidth(props.isZoom) + 10}px`};
  grid-template-columns: repeat(
    ${props => props.numberOfDays},
    ${props => `${handleWidth(props.isZoom)}px`}
  );
  z-index: 2;
  max-height: fit-content;
`;
export default ContainerBookingView;
