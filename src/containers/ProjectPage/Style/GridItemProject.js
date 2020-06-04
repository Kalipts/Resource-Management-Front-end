import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

export const Wrapper = styled(Paper)`
  height: 70px;
  justify-content: center;
  margin: 10px 0;
  font-size: 18px;
  line-height: 15px;
  font-weight: ${props => (props.title ? 'bold' : 'normal')};
  opacity: ${props => (props.title ? '0.5' : 'unset')};
`;

export const GridItem = styled(Grid)`
  align-items: center;
  font-weight: ${props => (props.bold ? 'bold' : 'unset')};
`;

export const CheckboxItem = styled(Checkbox)`
  transform: scale(1.5);
`;

export const Status = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  border-radius: 13.5px;
  background-color: ${props => (props.archive ? '#BCBCBC' : '#3dac62')};
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  line-height: 10px;
`;
