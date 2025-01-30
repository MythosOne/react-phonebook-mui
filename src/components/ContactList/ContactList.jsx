import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  getContacts,
  getFilter,
  getIsLoading,
} from '../../redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { Message } from './ContactList.styled';
import { List } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const filterContacts = (items, filter) => {
  return items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const visibleContacts = filterContacts(contacts, filter);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = contacts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {!isLoading && contacts.length === 0 ? (
        <Message>You do not have contacts 😯</Message>
      ) : (
        <>
          <List sx={{ padding: '20px 20px 12px' }}>
            {visibleContacts.map(contact => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </List>
          <Pagination
            count={Math.ceil(contacts.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '5px',
              '& .MuiPaginationItem-previousNext': { color: '#3f51b5' },
              '& .MuiPaginationItem-page': { color: '#3f51b5' },
            }}
          />
        </>
      )}
    </>
  );
};
