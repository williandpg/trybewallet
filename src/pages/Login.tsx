import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailUser } from '../redux/actions';
import './Login.css';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const valid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(userEmail);
    const validPassword = userPassword.length >= 6;
    return validEmail && validPassword;
  };
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailUser(userEmail));
    navigate('/carteira');
  };

  return (
    <>
      <div>Login</div>
      <form
        id="login-form"
        onSubmit={ (event) => handleLogin(event) }
      >
        <label htmlFor="email">
          <input
            type="email"
            data-testid="email-input"
            value={ userEmail }
            onChange={ (event) => setUserEmail(event.target.value) }
            placeholder="E-Mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            value={ userPassword }
            onChange={ (event) => setUserPassword(event.target.value) }
            placeholder="Senha"
          />
        </label>
        <button
          type="submit"
          id="submit-button"
          disabled={ !valid() }
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
