import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { string, object } from 'yup';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import {
  AddContactForm,
  Container,
  StyledTextField,
  StyledButton,
} from './ContactForm.styled';
import { Typography } from '@mui/material';
import { AddIcCall } from '@mui/icons-material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const ContactSchema = object({
    name: string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe and spaces.'
      )
      .required('Name is required'),
    phone: string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'The phone number must consist of numbers and a dash ###-##-##'
      )
      .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        const { name, phone } = values;
        const loweredCase = name.toLowerCase().trim();

        const searchName = contacts.some(
          contact => contact.name.toLowerCase().trim() === loweredCase
        );

        if (searchName) {
          formik.setFieldError('name', `Contact ${values.name} already exists`);
          return;
        }

        await dispatch(
          addContact({
            name,
            phone,
          })
        ).unwrap();

        resetForm();
      } catch (error) {
        setErrors({submit: error.message});
      } finally {
        setSubmitting(false);
      }
    },

    validationSchema: ContactSchema,
  });

  return (
    <AddContactForm onSubmit={formik.handleSubmit}>
      <Container>
        <Typography variant="h4" fontWeight="400" color="white">
          CONTACTS
        </Typography>
        <StyledTextField
          fullWidth
          type="text"
          name="name"
          label="Name"
          autoComplete="off"
          value={formik.values.name}
          onChange={formik.handleChange}
          disabled={formik.isSubmitting}
          error = {formik.touched.name && Boolean(formik.errors.name)}
          helperText = {formik.touched.name && formik.errors.name}
          variant="filled"
          required
        />
        <StyledTextField
          fullWidth
          type="tel"
          name="phone"
          label="Number phone"
          autoComplete="off"
          value={formik.values.phone}
          onChange={formik.handleChange}
          disabled={formik.isSubmitting}
          error = {formik.touched.phone && Boolean(formik.errors.phone)}
          helperText = {formik.touched.phone && formik.errors.phone}
          variant="filled"
          required
        />
      </Container>
      {formik.errors.submit && <Typography color="error">{formik.errors.submit}</Typography>}
      <StyledButton
        type="submit"
        variant="contained"
        startIcon={<AddIcCall />}
        disabled={formik.isSubmitting}
      >
        Add Contact
      </StyledButton>
    </AddContactForm>
  );
};
