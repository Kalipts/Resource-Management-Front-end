import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.div`
  line-height: 30px;
  color: #000000;
  font-size: 30px;
`;

export const AddProjectButton = styled.button`
  height: 100%;
  box-sizing: border-box;
  padding: 15px 25px;
  margin: 0 30px;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 17px;
  line-height: 20px;
  & > span {
    img {
      margin-right: 10px;
    }
    color: ${props => props.theme.color.primary};
  }
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
