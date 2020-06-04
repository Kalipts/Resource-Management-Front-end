import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 20;
  display: block;
  flex-direction: column;
  max-height: 500px;
  width: 100%;
  border-radius: 2px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  outline-offset: 0.5px;
  justify-content: center;
  align-items: center;
  pointer-events: all;
  opacity: 1;
  background-color: rgba(255, 255, 255, 1);
`;

export const Padding = styled.div`
  padding: 10px 20px;
`;
export const ListItem = styled.ul`
  background-color: inherit;
  height: 220px;
  scroll-behavior: smooth;
  overflow-y: scroll;
  margin: 2px 0;
  padding: 0 5px;
  label {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    min-width: 150px;
    font-weight: 300;
    font-size: 1.35em;
    margin: 2px auto;
    z-index: 9;
    cursor: pointer;
    transition: all 0.25s linear;
  }
  li {
    width: 100%;
    display: flex;
    align-items: center;
  }
  li:hover label {
    color: #ffffff;
  }
  input[type='radio'] {
    cursor: pointer;
  }
  input[type='radio']:checked ~ #radio {
    border: 5px solid #008000;
  }
`;
export const CustomRadio = styled.div`
  position: absolute;
  top: 10px;
  left: 1px;
  display: block;
  border: 5px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  z-index: 5;
  transition: border 0.1s linear;
  ::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 10px;
    width: 10px;
    top: 5px;
    left: 5px;
    margin: auto;
  }
`;

export const Item = styled.div`
  height: 40px;
  color: black;
  font-size: 15px;
  display: flex;
  align-items: center;
`;
export const SmallAvatar = styled(Avatar)`
  && {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
`;
export const Color = styled.div`
  height: 60%;
  width: 5px;
  border-radius: 1px;
  background-color: ${props => props.color || '#F8465C'};
  margin: 0 10px;
`;
