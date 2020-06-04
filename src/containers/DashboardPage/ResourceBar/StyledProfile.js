import styled from "styled-components";

const StyledProfile = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 0.1em solid ${props => props.theme.color.line};
  display: flex;
  align-items: center;
  padding: 0 auto;
  & > div {
    margin-left: 20px;
  }
`;

export default StyledProfile;
