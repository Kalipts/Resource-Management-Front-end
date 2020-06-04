import React, { useState, useEffect } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrrorTypography = styled(Typography)`
  background-color: #582f62;
  color: white;
  padding: 5px 10px;
  width: 180px;
  border-radius: 5px;
`;

const AlertInput = props => {
  const { message, anchor } = props;
  const [anchorEl, setAnchorEl] = useState(anchor);
  const handleClose = () => {
    setAnchorEl(undefined);
  };
  const open = Boolean(anchorEl);
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <ErrrorTypography>{message}</ErrrorTypography>
    </Popover>
  );
};

AlertInput.propTypes = {
  message: PropTypes.string,
  anchor: PropTypes.object,
};

export default AlertInput;
