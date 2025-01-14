
import { useSelector } from 'react-redux';

import { getContacts, getFilter, getIsLoading } from '../../redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { Message} from './ContactList.styled';
import { List } from '@mui/material';

const filterContacts = (items, filter) => {
  return items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  const visibleContacts = filterContacts(contacts, filter);



  return (
    <>
      {!isLoading && contacts.length === 0 ? (
        <Message>You do not have contacts 😯</Message>
      ) : (
        <List sx={{ padding: '20px 20px 12px' }}>
          {visibleContacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
