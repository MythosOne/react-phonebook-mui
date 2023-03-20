import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  AddLoginForm,
  Container,
  StyledTextField,
  StyledButton
} from './LoginForm.styled';
import { Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

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

  return (
    <>
      <AddLoginForm onSubmit={handleSubmit}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='400'
            color='white'
          >
            LOGIN
          </Typography>
          <StyledTextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="filled"
          />
          <StyledTextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="filled"
          />
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
