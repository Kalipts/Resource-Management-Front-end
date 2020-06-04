import styled from 'styled-components';
const StyledSideBar = styled.div`
  margin-right: 2px;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 190px;
  height: 659px;
  float: left;
  border-right: 0.1em solid ${props => props.theme.color.line};
`;
export default StyledSideBar;
