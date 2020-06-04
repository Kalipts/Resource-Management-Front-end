import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ActiveButton = styled(Button)`
  color: ${props => props.theme.color.primary};
`;

export default ActiveButton;
