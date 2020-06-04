import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  background-color: #ffffff;
  padding: 20px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: block;
  flex-direction: column;
  max-height: 600px;
  width: 550px;
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  outline-offset: 0.5px;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 0;
  }
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 99;
  transition: all 1s ease;
`;
