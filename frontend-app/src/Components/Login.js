import React, { useState } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const LoginForm = styled.form`
  max-width: 300px;
  margin: auto;
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ton code d'authentification ici
    // Si la connexion est réussie, appelle la fonction onLogin
    onLogin();
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <LoginForm>
        <Label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;