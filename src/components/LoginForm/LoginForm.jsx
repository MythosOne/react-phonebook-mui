import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  AddLoginForm,
  Container,
  StyledTextField,
  StyledButton,
  StyledFilledInput,
} from './LoginForm.styled';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Typography,
} from '@mui/material';
import * as React from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <AddLoginForm onSubmit={handleSubmit}>
        <Container>
          <Typography variant="h4" fontWeight="400" color="white">
            LOGIN
          </Typography>
          <StyledTextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="filled"
          />
          {/* <StyledTextField
            sx={{ fontSize: '20px', color: '#fff' }}
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
            <StyledFilledInput
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
          startIcon={<AccountCircle />}
          type="submit"
        >
          Log In
        </StyledButton>
      </AddLoginForm>
    </>
  );
};
