import styled from 'styled-components';

export const WrapperProjectForm = styled.div`
  position: relative;
  height: 100%;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const WrapperItem = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  & > div {
    color: #000000;
    font-size: 18px;
  }
`;

export const SelectItem = styled.div`
  position: relative;
  display: flex;
  padding: 0 ${props => (props.button ? 0 : '18px')};
  margin: 0 10px;
  box-sizing: border-box;
  font-size: 16px;
  height: 100%;
  width: 70%;
  border: ${props => (props.button ? 'unset' : '1px solid #dadada')};
  align-items: center;
  justify-content: ${props => (props.button ? 'unset' : 'space-between')};
  & > span {
    opacity: 0.5;
    color: #000000;
  }
  cursor: pointer;
`;

export const InputName = styled.input`
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: block;
  border-style: none;
  outline: none;
  box-sizing: border-box;
`;

export const Person = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 0 5px;
  cursor: pointer;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  height: auto;
  clear: both;
`;

export const Name = styled.div`
  height: 20px;
  color: black;
  font-size: 18px;
  margin-left: 5px;
  padding: 5px 8px;
`;

export const WrapperNote = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    color: #000000;
    font-size: 18px;
  }
`;

export const InputNote = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  display: block;
  border-style: none;
  outline: none;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  &:focus {
    border-bottom-color: #8e44ad;
  }
`;
export const WrapperColor = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const WrapperSelectColor = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 70%;
  margin: 0 10px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
`;

export const Button = styled.div`
  background-color: ${props =>
    props.primary ? props.theme.color.primary : 'WHITE'};
  opacity: ${props => (props.primary ? 1 : 0.5)};
  color: ${props => (props.primary ? 'WHITE' : 'BLACK')};
  font-weight: bold;
  padding: 15px 20px;
  margin-right: 5px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${props => (props.primary ? '#E37C4F' : '#686868')};
    color: white;
    opacity: 1;
  }
`;

export const CircleColor = styled.div`
  display: 'inline-block';
  background-color: ${props => props.color};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

export const SelectedColor = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  z-index: 2;
  cursor: auto;
`;

export const Alert = styled.div`
  position: ${props => (props.name ? 'absolute' : 'relative')};
  color: red;
  right: ${props => (props.name ? '48%' : 'unset')};
  top: ${props => (props.name ? '5%' : 'unset')};
  font-size: 14px;
`;
