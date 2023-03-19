import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import { AddContactForm, Container } from './ContactForm.styled';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography } from '@mui/material';
import { AddIcCall } from '@mui/icons-material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.tel.value;

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
          number,
        })
      );
    }
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
      fontWeight: '400',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  });

  return (
    <>
      <AddContactForm onSubmit={handleSubmit}>
        <Container>
          <Typography variant="h4" fontWeight="400" color="white">
            CONTACTS
          </Typography>
          <CssTextField
            fullWidth
            type="name"
            name="name"
            label="Name"
            variant="filled"
            inputProps={{pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <CssTextField
            fullWidth
            type="tel"
            name="tel"
            label="Number phone"
            variant="filled"
            // inputProps={{inputMode: 'tel', pattern:"\d{3}[-]\d{2}[-]\d{2}"}}
            // title="The phone number must consist of numbers and a dash ###-##-##"
            // required
          />
        </Container>
        <Button
          variant="contained"
          startIcon={<AddIcCall />}
          type="submit"
          style={{
            borderRadius: '4px',
            width: '180px',
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
          Add Contact
        </Button>
      </AddContactForm>
    </>
  );
};
