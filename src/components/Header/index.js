import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Menu, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import StyledHeader from './StyledHeader';
import logo from '../../images/Bitmap.png';
import userIcon from '../../images/Oval.png';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 14px;
`;

const Header = ({ loggedIn }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = async () => {
    handleClose();
    await localStorage.removeItem('token');
    window.location.assign('/login');
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledHeader>
      <li>
        <NavLink to="/">
          <img src={logo} alt="ces-logo" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/project">Projects</NavLink>
      </li>
      <li>
        <NavLink to="/resource">Resources</NavLink>
      </li>
      <li>
        {!loggedIn ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <Wrapper>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <img alt="user-icon" src={userIcon} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout} href="/">
                Logout
              </MenuItem>
            </Menu>
          </Wrapper>
        )}
      </li>
    </StyledHeader>
  );
};
Header.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Header;
