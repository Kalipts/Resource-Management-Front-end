import styled from 'styled-components';
const ContainerResource = styled.div`
  direction: inherit;
  z-index: 3;
  border-bottom: 0px solid ${props => props.theme.color.borderCellCalendar};
  overflow: hidden;
  scroll-behavior: smooth;
`;
export default ContainerResource;
