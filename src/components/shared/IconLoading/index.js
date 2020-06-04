import React from 'react';
import StyledLoading from './StyledLoading';

const LoadingIcon = props => (
  <StyledLoading size={props.size}>
    <div></div>
    <div></div>
    <div></div>
  </StyledLoading>
);

export default LoadingIcon;
