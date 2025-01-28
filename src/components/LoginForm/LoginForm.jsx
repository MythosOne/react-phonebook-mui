import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { getIsLoading } from '../../redux/auth/selectors';
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
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const LoginForm = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

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
        <AddLoginForm onSubmit={handleSubmit} ref={ref} {...props}>
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
      )}
    </>
  );
});
