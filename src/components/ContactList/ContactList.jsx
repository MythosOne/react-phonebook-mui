import { deleteContact } from '../../redux/contacts/operations';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Message} from './ContactList.styled';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Typography
} from '@mui/material';
import {AccountCircle, PersonRemove } from '@mui/icons-material';

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
    <List sx={{padding:"20px 20px 12px"}}>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id} sx={{padding:"0 0 8px"}}>
          <ListItemAvatar>
            <Avatar  sx={{bgcolor:"#3f51b5"}}>
              <AccountCircle/>
            </Avatar>
            </ListItemAvatar>
          <ListItemText>
            <Typography
              fontSize="18px"
              color="white">
              {`${contact.name} : ${contact.number}`}
            </Typography>
            </ListItemText>
          {
            <Button
              variant="outlined"
              startIcon={<PersonRemove />}
              type="button"
              name="delete"
              style={{
            borderRadius: '4px',
            width: '100px',
            height: '30px',
            textAlign: 'center',
            border: 'none',
            fontSize: '12px',
            backgroundColor: '#3f51b5',
            color: 'white',
            margin: '0 auto',
          }}
              onClick={() => {
                dispatch(
                  deleteContact(contact.id)
                );
              }}
            >
              Delete
            </Button>
          }
        </ListItem>
      ))}
      <Message>
        {contacts.length === 0 && 'You do not have contacts 😯'}
      </Message>
    </List>
  );
};