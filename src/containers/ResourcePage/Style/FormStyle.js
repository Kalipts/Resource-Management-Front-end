import styled from 'styled-components';

export const Container = styled.div`
  height: 450px;
  width: 409px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
  top: 30%;
  left: 50%;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -250px;
`;

export const HeaderForm = styled.div`
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
`;

export const Error = styled.div`
  height: 25px;
  width: 200px;
  color: red;
  font-size: 12px;
  line-height: 25px;
`;

export const HeaderTitle = styled.div`
  height: 25px;
  width: 200px;
  color: #000000;
  font-size: 17px;
  font-weight: bold;
  line-height: 25px;
`;

export const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterForm = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const AddFormButton = styled.div`
  height: 40px;
  width: 129px;
  border-radius: 2px;
  background-color: #f95b27;
  margin-left: 96px;
  cursor: pointer;
`;

export const AddFormButtonSpan = styled.div`
  height: 18px;
  width: 150px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  margin-top: 12px;
  margin-left: 20px;
`;

export const CancelFormButtonSpan = styled.div`
  height: 18px;
  width: 44px;
  opacity: 1;
  color: #000000;
  font-size: 14px;
  line-height: 18px;
  margin-left: 6px;
  margin-top: 10px;
`;

export const CancelFormButton = styled.div`
  height: 40px;
  width: 60px;
  border-radius: 2px;
  background-color: #ffffff;
  margin-left: 10px;
  &:hover {
    background-color: rgba(70, 71, 67, 0.66);
    ${CancelFormButtonSpan} {
      color: #ffffff;
    }
  }
  cursor: pointer;
`;
