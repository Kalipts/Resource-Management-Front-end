import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

const StyledInputButton = styled(IconButton)`
  box-sizing: border-box;
  border: 1px solid #34ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200;
  width: 5px;
  z-index: 9000;
  border-color: #444444;
`;
export default StyledInputButton;
