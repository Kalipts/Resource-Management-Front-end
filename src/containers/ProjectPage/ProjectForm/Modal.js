import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '../Style/Modal';
import { ESC_KEY } from '../../../constants/keyTypes';

const Modal = ({ onCloseForm, children }) => {
  const modal = useRef();
  const toggleClose = () => {
    onCloseForm();
  };
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClickDropDown, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClickDropDown, false);
    };
  }, [modal]);
  // Handle the key press event.
  function handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === ESC_KEY) {
      toggleClose();
    }
  }

  function handleOutsideClickDropDown(e) {
    const { current } = modal;
    if (current && !current.contains(e.target)) {
      // toggleClose();
      // document.removeEventListener('click', handleOutsideClick, false);
    }
  }
  return <Wrapper ref={modal}>{children}</Wrapper>;
};
Modal.propTypes = {
  onCloseForm: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
