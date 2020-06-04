import styled from 'styled-components';

const ThreeDots = styled.div`
  &,
  &:before,
  &:after {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 7px;
    background-color: #34495e;
  }
  &:before,
  &:after {
    content: '';
  }
  &:before {
    right: 10px;
    transition: right 0.3s ease-out;
  }

  &:after {
    left: 10px;
    transition: left 0.3s ease-out;
  }

  &:hover &:before {
    right: -5px;
  }

  &:hover &:after {
    left: -5px;
  }
`;

export default ThreeDots;
