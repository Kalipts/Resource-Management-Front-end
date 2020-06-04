import styled from 'styled-components';
import { CES_ORANGE } from '../../../constants/colorTypes';

export const FooterBooking = styled.div`
  height: 42px;
  margin-top: 5px;
`;

export const ContainButton = styled.div`
  margin-left: 24.5px;
  margin-right: 19px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const StyledButton = styled.div`
  background-color: ${props => (props.primary ? `${CES_ORANGE}` : 'WHITE')};
  opacity: ${props => (props.primary ? 1 : 0.5)};
  color: ${props => (props.primary ? 'WHITE' : 'BLACK')};
  font-size: 14px;
  line-height: 18px;
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
