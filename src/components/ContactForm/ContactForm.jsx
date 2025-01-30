import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
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

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.tel.value;

    const loweredCase = name.toLowerCase().trim();
    const searchName = contacts.some(
      cont => cont.name.toLowerCase().trim() === loweredCase
    );

    if (searchName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
    } else {
      dispatch(
        addContact({
          name,
          phone,
        })
      );
    }
    form.reset();
  };

  return (
    <>
      <AddContactForm onSubmit={handleSubmit}>
        <Container>
          <Typography variant="h4" fontWeight="400" color="white">
            CONTACTS
          </Typography>
          <StyledTextField
            fullWidth
            type="text"
            name="name"
            label="Name"
            variant="filled"
            inputProps={{
              inputMode: 'text',
              pattern:
                '^[a-zA-Zа-яА-Я]+(([\\s][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$',
            }}
            title="Name may contain only letters, apostrophe and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <StyledTextField
            fullWidth
            type="tel"
            name="tel"
            label="Number phone"
            variant="filled"
            inputProps={{
              inputMode: 'tel',
              pattern: '\\d{3}-\\d{2}-\\d{2}',
            }}
            title="The phone number must consist of numbers and a dash ###-##-##"
            required
          />
        </Container>
        <StyledButton
          variant="contained"
          startIcon={<AddIcCall />}
          type="submit"
        >
          Add Contact
        </StyledButton>
      </AddContactForm>
    </>
  );
};
