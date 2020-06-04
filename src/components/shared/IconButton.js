/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import StyledInputButton from './StyledIconButton';

export default function CloseButton({ inputProps, handleClick }) {
  const preventPropagation = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  const handleOnClick = async e => {
    preventPropagation(e);
    await handleClick();
    setTimeout(() => {}, 3000);
  };
  return (
    <div
      onClick={handleOnClick}
      onKeyDown={preventPropagation}
      onMouseDown={handleOnClick}
      onMouseUp={preventPropagation}
      onMouseMove={preventPropagation}
    >
      <StyledInputButton disabled>{inputProps}</StyledInputButton>
    </div>
  );
}
CloseButton.propTypes = {
  inputProps: PropTypes.node,
  handleClick: PropTypes.func,
};
