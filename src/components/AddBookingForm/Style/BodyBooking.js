import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 20px;
  position: relative;
  opacity: 1;
  pointer-events: ${props => (props.disabled ? 'none' : 'unset')};
`;

export const Opacity = styled.div`
  position: absolute;
  opacity: ${props => (props.disabled ? '0.5' : 1)};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.disabled ? 'rgba(255, 255, 255, 0.9)' : 'unset'};
  pointer-events: none;
`;
export const BookingTime = styled.div`
  height: 50px;
  display: flex;
`;

export const TotalTime = styled.div`
  height: 30px;
  margin-top: 15px;
  padding: 5px auto;
`;

export const InputDetail = styled.textarea`
  display: block;
  border-width: 0 0 1px;
  outline: none;
  box-sizing: border-box;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  resize: none;
  overflow: hidden;
  &:focus {
    border-bottom-color: #8e44ad;
  }
`;
