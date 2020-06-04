import styled, { keyframes } from 'styled-components';

const keyFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled.div`
  display: inline-block;
  position: absolute;
  align-items: center;
  width: ${props => (props.size ? `${props.size}px` : '15px')};
  height: ${props => (props.size ? `${props.size}px` : '15px')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  background-color: transparent;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${props => (props.size ? '2px' : '1px')} solid blue;
    border-radius: 50%;
    animation: ${keyFrame} 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => (props.size ? '#f15927' : '#ffffff')} transparent
      transparent transparent;
  }
  & :nth-child(1) {
    animation-delay: -0.3s;
  }
  & :nth-child(2) {
    animation-delay: -0.2s;
  }
  & :nth-child(3) {
    animation-delay: -0.1s;
  }
`;

export default StyledLoading;
