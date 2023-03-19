import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { AddRegisterForm, Container } from './RegisterForm.styled';
import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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

  const CssTextField = styled(TextField)({
    '& input': {
      fontSize: '20px',
    },
    '& label': {
      fontSize: '20px',
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
      fontWeight: '600',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  });

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
          <CssTextField
            fullWidth
            type="userName"
            name="userName"
            label="User Name"
            variant="filled"
          />
          <CssTextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="filled"
          />
          <CssTextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="filled"
          />
        </Container>
        <Button
          variant="contained"
          startIcon={<AppRegistration />}
          type="submit"
          style={{
            borderRadius: '4px',
            width: '160px',
            height: '40px',
            textAlign: 'center',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#3f51b5',
            color: 'white',
            margin: '0 auto',
          }}
        >
          Register
        </Button>
      </AddRegisterForm>
    </>
  );
};
