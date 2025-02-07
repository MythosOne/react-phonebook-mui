import { forwardRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/auth/selectors';

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
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const RegisterForm = forwardRef(({ onSubmit, ...props }, ref) => {
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const userData = {
      username: form.elements.userName.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    onSubmit(userData);

    form.reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      {isLoading ? (
        <Stack spacing={2} direction="row" alignItems="center">
          <CircularProgress size="60px" />
        </Stack>
      ) : (
        <AddRegisterForm onSubmit={handleSubmit} ref={ref} {...props}>
          <Container>
            <Typography variant="h4" fontWeight="400" color="white">
              REGISTER
            </Typography>
            <StyledTextField
              autoFocus
              fullWidth
              type="text"
              name="userName"
              label="User Name"
              variant="filled"
              autoCapitalize="username"
              autoComplete="username"
            />
            <StyledTextField
              fullWidth
              type="email"
              name="email"
              label="Email"
              variant="filled"
              autoComplete="email"
            />
            <FormControl variant="filled" fullWidth>
              <InputLabel sx={{ fontSize: '20px', color: '#fff' }}>
                Password
              </InputLabel>
              <FilledInput
                sx={{ fontSize: '20px', color: '#fff' }}
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                variant="filled"
                autoComplete="new-password"
                inputProps={{ minLength: 10 }}
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
      )}
    </>
  );
});
