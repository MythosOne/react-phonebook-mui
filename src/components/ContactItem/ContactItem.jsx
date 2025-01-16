import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';

import { deleteContact } from 'redux/contacts/operations';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { AccountCircle, PersonRemove } from '@mui/icons-material';
import { StyledButton, StyledTypography } from './ContactItem.styled';
import { styles } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const [isShowContact, setIsShowContact] = useState(true);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    setIsShowContact(false);
  };

  return (
    <>
      <Transition
        key={contact._id}
        in={isShowContact}
        appear={true}
        timeout={300}
        nodeRef={nodeRef}
      >
        {state => (
          <ListItem
            ref={nodeRef}
            style={{
              padding: '0 0 8px',
              ...styles.container,
              ...(state === 'entered'
                ? { ...styles.entered }
                : { ...styles.exited }),
            }}
          >
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
                  handleDelete(contact._id);
                }}
              >
                Delete
              </StyledButton>
            }
          </ListItem>
        )}
      </Transition>
    </>
  );
};
