import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  AddRegisterForm,
  Container,
  StyledTextField,
  StyledButton
} from './RegisterForm.styled';
import { Typography } from '@mui/material';
import { AppRegistration } from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.userName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.Reset();
  };

  return (
    <>
      <AddRegisterForm onSubmit={handleSubmit}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="400"
            color="white">
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
          startIcon={<AppRegistration />}
          type="submit"
        >
          Register
        </StyledButton>
      </AddRegisterForm>
    </>
  );
};
