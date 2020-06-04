import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 0 5px;
  cursor: pointer;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  clear: both;
  & span {
    max-width: 100px;
  }
  & #show-item {
    width: 50px;
    height: 25px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Color = styled.div`
  height: 17px;
  width: 5px;
  border-radius: 1px;
  background-color: ${props => props.color || 'none'};
  margin-right: 5px;
`;

export const Name = styled.div`
  height: 20px;
  color: black;
  font-size: 18px;
  margin-left: 5px;
  padding: 5px 8px;
  :hover {
    background-color: #e6e6e6;
    border-radius: 8px;
  }
`;
