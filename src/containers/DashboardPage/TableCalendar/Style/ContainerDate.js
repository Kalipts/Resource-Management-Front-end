import styled from 'styled-components';

const ContainerDate = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 10;
  top: 0;
  position: sticky;
  background: #fff;
  border-top: 1px solid ${props => props.theme.color.borderCellCalendar};
  border-bottom: 1px solid ${props => props.theme.color.borderCellCalendar};
`;
export default ContainerDate;
