import styled from 'styled-components';
export const Container = styled.div`
  width: 941px;
  display: grid;
  grid-template-rows: repeat(4, auto);
  user-select: none; /* Standard syntax */
`;

export const HeaderTable = styled.div`
  display: grid;
  grid-template-columns: 55px 100px 100px 200px 200px 100px 200px;
  width: 941px;
  height: 60px;

  margin-top: ${props => (props.header ? 0 : 10)}px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const ChecboxGrid = styled.div`
  margin-top: 15px;
  margin-left: 15px;
`;

export const TagElement = styled.div`
  margin-top: 19px;
  margin-left: ${props => props.margin || 15}px;
  size: 14px;
  line-height: 18px;
  font-weight: bold;
  opacity: ${props => (props.title ? 50 : 100)}%;
  display: flex;
`;

export const Edit = styled.div`
  height: 18px;
  width: 25px;
  color: #000000;
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
  cursor: pointer;
`;
