import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import { deleteContact } from 'redux/contacts/operations';
import { DeleteConfirmationModal } from '../Modal/DeleteConfirmationModal';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { AccountCircle, PersonRemove } from '@mui/icons-material';
import { StyledButton, StyledTypography } from './ContactItem.styled';
import { styles } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const [isShowContact, setIsShowContact] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const deleteButtonRef = useRef(null);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    setIsShowContact(false);
    setIsOpenModal(false);

    if (deleteButtonRef.current) {
      deleteButtonRef.current.focus();
    }
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
              padding: '0 0 5px',
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
              <StyledTypography>
                {`${contact.name} : ${contact.phone}`}
              </StyledTypography>
            </ListItemText>
            {
              <StyledButton
                ref={deleteButtonRef}
                variant="outlined"
                startIcon={<PersonRemove />}
                type="button"
                name="delete"
                onClick={() => {
                  setIsOpenModal(true);
                }}
              >
                Delete
              </StyledButton>
            }
            <DeleteConfirmationModal
              open={isOpenModal}
              onClose={() => setIsOpenModal(false)}
              onConfirm={() => handleDelete(contact._id)}
            />
          </ListItem>
        )}
      </Transition>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
