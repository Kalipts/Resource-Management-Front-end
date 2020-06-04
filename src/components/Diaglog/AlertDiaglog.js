import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import IconLoading from '../shared/IconLoading';

export const Wrapper = styled.div`
  position: relative;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export default function AlertDialog({
  title = '',
  diaglog = '',
  open = false,
  handleOnAccept,
  handleOnDisagree,
  alert,
}) {
  const [visibile, setVisible] = useState(open);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnCancel = async () => {
    await setVisible(false);
  };
  const handleOnClose = async () => {
    await handleOnCancel();
    setIsLoading(true);
    await handleOnDisagree();
    setIsLoading(false);
  };
  const handleOnAgree = async () => {
    setIsLoading(true);
    await handleOnCancel();
    await handleOnAccept();
    setIsLoading(false);
  };
  useLayoutEffect(() => {
    setVisible(open);
  }, [isLoading, open]);
  return (
    <div>
      <Wrapper disabled={isLoading}>
        <Dialog
          open={visibile}
          onClose={handleOnClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {diaglog}
            </DialogContentText>
          </DialogContent>
          {alert ? (
            <DialogActions>
              <Button onClick={handleOnClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          ) : (
            <DialogActions>
              <Button
                disabled={!visibile}
                onClick={handleOnClose}
                color="primary"
              >
                Disagree
              </Button>
              <Button
                disabled={!visibile}
                onClick={handleOnAgree}
                color="primary"
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          )}
        </Dialog>
      </Wrapper>
      {isLoading && <IconLoading size="70" />}
    </div>
  );
}

AlertDialog.propTypes = {
  title: PropTypes.string,
  diaglog: PropTypes.string,
  handleOnAccept: PropTypes.func,
  handleOnDisagree: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  open: PropTypes.bool,
  alert: PropTypes.bool,
};
