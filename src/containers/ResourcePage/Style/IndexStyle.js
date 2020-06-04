import styled from 'styled-components';

export const ResourceContainer = styled.div`
  margin-left: 250px;
  position: fixed;
  top: 25%;
  left: 35%;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -230px;
`;

export const ResourceHeader = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
`;

export const AddButton = styled.div`
  box-sizing: border-box;
  height: 41px;
  width: 200px;
  border: 1px solid #f36b29;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  cursor: pointer;
`;

export const AddButtonSpan = styled.div`
  height: 18px;
  width: 150px;
  color: #f36b29;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
  margin-left: 13px;
`;

export const AddButtonIcon = styled.img`
  height: 12px;
  width: 12px;
  margin-top: 13px;
  margin-left: 13px;
`;
export const BodyPage = styled.div`
  height: 420px;
`;

export const ResourceTitle = styled.div`
  height: 30px;
  width: 170px;
  color: #000000;
  font-size: 24px;
  line-height: 30px;
`;
