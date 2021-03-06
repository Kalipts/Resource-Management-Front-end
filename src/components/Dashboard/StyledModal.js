import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  background-color: #ffffff;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: block;
  flex-direction: column;
  max-height: 600px;
  width: 450px;
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
