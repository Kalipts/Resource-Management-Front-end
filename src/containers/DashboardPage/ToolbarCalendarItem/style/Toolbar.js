import styled from 'styled-components';

const Toolbar = styled.div`
  margin-bottom: 2px;
  height: 40px;
  width: ${props => `${props.width - 20}px`};
  background-color: #ffffff;
  box-shadow: 0 0px 0 0 #e1e5e8;
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;
export default Toolbar;
