import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { Message } from './ContactList.styled';
import { List } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const ITEMS_PER_PAGE = 5;

const filterContacts = (items, filter) => {
  return items.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);

  const visibleContacts = filterContacts(contacts, filter);

  const handleChange = (_, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = visibleContacts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (page > 1 && currentItems.length === 0) {
      setPage(prev => prev - 1);
    }
  }, [currentItems, page]);

  return (
    <>
      {!isLoading && contacts.length === 0 ? (
        <Message>You do not have contacts 😯</Message>
      ) : (
        <>
          {!isLoading && visibleContacts.length === 0 && (
            <Message>You don't have such a contact 😯</Message>
          )}
          <List sx={{ padding: '20px 20px 0' }}>
            {currentItems.map(contact => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
          </List>
          {visibleContacts.length > ITEMS_PER_PAGE && (
            <Pagination
              count={Math.ceil(visibleContacts.length / ITEMS_PER_PAGE)}
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
          )}
        </>
      )}
    </>
  );
};
