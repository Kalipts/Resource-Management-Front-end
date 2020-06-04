/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { CES_GREY_BORDER, CES_ORANGE } from '../../../constants/colorTypes';

export const ContainerRatio = styled.div`
  display: flex;
  margin: 13px 0 10px;
`;

export const Percent = styled.div`
  box-sizing: border-box;
  height: 36px;
  border: 1px solid ${props => (props.active ? CES_ORANGE : CES_GREY_BORDER)};
  border-radius: 17px;
  padding: 5px 15px;
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: all 0.5s;
  & > svg {
    height: 20px;
    width: 20px;
    display: inline-block;
  }
  & > div {
    align-items: center;
    padding-left: 10px;
    font-size: 16px;
    color: ${props => (props.active ? CES_ORANGE : CES_GREY_BORDER)};
  }
  &:hover {
    border-radius: 5px;
  }
`;

export const Duration = styled(Percent)`
  margin-left: 10px;
`;
