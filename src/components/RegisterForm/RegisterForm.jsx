import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { AddRegisterForm, Container } from './RegisterForm.styled';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AppRegistration } from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = dispatch(
      register({
        name: form.elements.userName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.Reset();
  };

  const CssTextField = styled(TextField)({
    '& label': {
      color: '#3f51b5',
    },
    '& label.Mui-focused': {
      color: '#3f51b5',
      fontWeight: '600',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3f51b5',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#3f51b5',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3f51b5',
      },
    },
  });

  return (
    <>
      <AddRegisterForm onSubmit={handleSubmit}>
        <Container>
          <CssTextField
            fullWidth
            type="userName"
            name="userName"
            label="User Name"
            variant="outlined"
          />
          <CssTextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />
          <CssTextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="outlined"
          />
        </Container>
        <Button
          variant="contained"
          startIcon={<AppRegistration />}
          type="submit"
          style={{
            borderRadius: '4px',
            width: '120px',
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
