import React, { useEffect, useContext, useRef } from 'react';
import isNil from 'lodash/isNil';
import PropTypes from 'prop-types';
import { StyledModal } from './StyledModal';
import { CalendarContext } from '../../context/Calendar';
import { ESC_KEY } from '../../constants/keyTypes';

const Modal = ({ children }) => {
  const modal = useRef();
  const { handleCloseModal, isModalOpen } = useContext(CalendarContext);
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, true);
    document.addEventListener('click', handleOutsideClick, true);
  }, []);
  // Handle the key press event.
  function handleKeyUp(e) {
    const keys = {};
    keys[`${ESC_KEY}`] = () => {
      handleCloseModal();
      window.removeEventListener('keyup', handleKeyUp, false);
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  // Handle the mouse click on browser window.
  function handleOutsideClick(e) {
    const isNotClose = isNil(modal);
    if (isNotClose) {
      return;
    }
    const { current } = modal;
    if (current && !current.contains(e.target)) {
      handleCloseModal();
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }
  return (
    <>{isModalOpen && <StyledModal ref={modal}>{children}</StyledModal>}</>
  );
};
Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
