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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
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
        onSubmit={ (event) => handleLogin(event) }
      >
        <div>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="email-input"
              value={ userEmail }
              onChange={ (event) => setUserEmail(event.target.value) }
              placeholder="E-Mail"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              data-testid="password-input"
              value={ userPassword }
              onChange={ (event) => setUserPassword(event.target.value) }
              placeholder="Senha"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={ !valid() }
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
