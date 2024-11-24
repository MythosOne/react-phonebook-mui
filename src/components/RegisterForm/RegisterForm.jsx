import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import {
  AddRegisterForm,
  Container,
  StyledTextField,
  StyledButton,
} from './RegisterForm.styled';
import {
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
} from '@mui/material';
import {
  AppRegistration,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import * as React from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    const form = event.currentTarget;

    const registrationResult = await dispatch(
      register({
        username: form.elements.userName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    if (registrationResult.mate.requestStatus === 'fulfilled') {
      setIsRegistered(true);
      setTimeout(() => navigate('/login'), 3000);
    }

    form.reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <AddRegisterForm onSubmit={handleSubmit}>
        <Container>
          <Typography variant="h4" fontWeight="400" color="white">
            REGISTER
          </Typography>
          <StyledTextField
            fullWidth
            type="userName"
            name="userName"
            label="User Name"
            variant="filled"
          />
          <StyledTextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="filled"
          />
          {/* <StyledTextField sx={{ fontSize: '20px', color: '#fff' }}
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="filled"
          /> */}
          <FormControl variant="filled" fullWidth>
            <InputLabel sx={{ fontSize: '20px', color: '#fff' }}>
              Password
            </InputLabel>
            <FilledInput
              sx={{ fontSize: '20px', color: '#fff' }}
              type={showPassword ? 'text' : 'password'}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: '#fff' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Container>
        <StyledButton
          variant="contained"
          startIcon={<AppRegistration />}
          type="submit"
        >
          Register
        </StyledButton>
      </AddRegisterForm>

      {isRegistered && (
        <div>
          <p>Registration was successful! Go to login page...</p>
        </div>
      )}
    </>
  );
};
