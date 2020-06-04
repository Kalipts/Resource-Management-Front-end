import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Redirect, useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { login } from '../../api/authApi';
import { validatePass, validateEmail } from '../../utils/validate';
import { isEmpty } from '../../utils/Util';
import { AUTH_HEADER } from '../App/constant';
import { addHeaderAxios } from '../../api/axiosService';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const FormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
`;
export default function Login({ handleLoggin = () => {}, loggedIn = false }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const inputUser = e => setUser(e.target.value);
  const inputPassword = e => setPassword(e.target.value);
  const handleOnSubmit = async () => {
    const isValidate = validateEmail(user) && validatePass(password);
    if (!isValidate) {
      setError('Email or pass are invalid');
      return;
    }
    try {
      const res = await login({ email: user, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      await addHeaderAxios(AUTH_HEADER, token);
      await handleLoggin();
    } catch (err) {
      if (isEmpty(err.response.data)) {
        setError('Server in error');
      }
      setError(err.response.data.errors.message);
    }
  };
  const location = useLocation();
  const prevLocation = !isEmpty(location.state)
    ? location.state.prevLocation
    : '/dashboard';
  return loggedIn ? (
    <Redirect
      to={{
        pathname: prevLocation,
      }}
    />
  ) : (
    <Wrapper>
      <form noValidate autoComplete="off">
        {error && <Typography color="error">{error}</Typography>}
        <div>
          <TextField
            required
            label="Email"
            defaultValue="loc@gmail.com"
            onInput={inputUser}
          />
        </div>{' '}
        <div>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onInput={inputPassword}
          />
        </div>
        <FormButton>
          <Button variant="contained" color="default" onClick={handleOnSubmit}>
            Login
          </Button>{' '}
        </FormButton>
      </form>
    </Wrapper>
  );
}
Login.propTypes = {
  handleLoggin: PropTypes.func,
  loggedIn: PropTypes.bool,
};
