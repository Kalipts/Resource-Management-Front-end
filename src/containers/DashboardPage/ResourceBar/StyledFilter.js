import styled from "styled-components";

const StyledFilter = styled.div`
  margin: 2px 0;
  border-bottom: 0.1em solid ${props => props.theme.color.line};
  & > input {
    width: 100px;
    height: 77px;
    font-size: 18px;
    border: none;
    outline: none;
    width: 100px;
    padding: 5px 20px;
  }
`;

export default StyledFilter;
