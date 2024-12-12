import { deleteContact } from '../../redux/contacts/operations';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton, Message, StyledTypography } from './ContactList.styled';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { AccountCircle, PersonRemove } from '@mui/icons-material';

const filterContacts = (items, filter) => {
  return items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const visibleContacts = filterContacts(contacts, filter);

  return (
    <>
      {contacts.length === 0 ? (
        <Message>You do not have contacts 😯</Message>
      ) : (
        <List sx={{ padding: '20px 20px 12px' }}>
          {visibleContacts.map(contact => (
            <ListItem key={contact._id} sx={{ padding: '0 0 8px' }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#3f51b5' }}>
                  <AccountCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <StyledTypography
                  fontSize="18px"
                  color="white"
                  textshadow="2px 2px 4px black"
                >
                  {`${contact.name} : ${contact.phone}`}
                </StyledTypography>
              </ListItemText>
              {
                <StyledButton
                  variant="outlined"
                  startIcon={<PersonRemove />}
                  type="button"
                  name="delete"
                  onClick={() => {
                    dispatch(deleteContact(contact._id));
                  }}
                >
                  Delete
                </StyledButton>
              }
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
