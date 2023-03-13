import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  AddRegisterForm,
  Label,
  FormikInput,
  RegButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(
      register({
        name: values.userName,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <AddRegisterForm>
        <Label>
          UserName
          <FormikInput
            type="text"
            name="userName"
            placeholder="Enter your name"
            required
          />
        </Label>
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
        <RegButton type="submit">Register</RegButton>
      </AddRegisterForm>
    </Formik>
  );
};
