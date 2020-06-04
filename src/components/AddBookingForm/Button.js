import React from 'react';
import { StyledButton } from './Style/FooterBooking';

const Button = props => {
  const { onClick, primary } = props;
  return (
    <StyledButton onClick={onClick} primary={primary}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
