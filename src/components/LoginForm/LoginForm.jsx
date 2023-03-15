import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AddLoginForm, Container } from './LoginForm.styled';
import { Button, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

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
      <AddLoginForm onSubmit={handleSubmit}>
        <Container>
          <Typography
            variant='h4'
            fontWeight='400'
            color='white'
          >
            LOGIN
          </Typography>
          <CssTextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="standard"
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
          startIcon={<AccountCircle />}
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
          Log In
        </Button>
      </AddLoginForm>
    </>
  );
};
