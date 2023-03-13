import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  AddLoginForm,
  Label,
  FormikInput,
  LogButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <AddLoginForm>
        <Label>
          Email
          <FormikInput
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </Label>
        <Label>
          Password
          <FormikInput
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Label>
        <LogButton type="submit">Log In</LogButton>
      </AddLoginForm>
    </Formik>
  );
};
