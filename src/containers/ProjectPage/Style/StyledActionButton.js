import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const StyledActionButton = styled.div`
  height: 100%;
  color: #f8465c;
  & > img {
    margin-right: 5px;
  }
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const Button = styled(IconButton)`
  font-size: 17px;
  line-height: 20px;
`;
