import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { getIsLoading } from '../redux/contacts/selectors';

const styles = {
  container: {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  gap: '20px', 
  maxWidth: '300px',
  marginTop: '30px',
  border: '1px solid rgb(236, 236, 236)',
  borderRadius: '10px',
    boxShadow: '0px 1px 3px rgb(0, 0, 0, 0.12)',
  backdropFilter: 'blur(10px)',
  },
  message: {
  padding: '0',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '600',
  color: 'orange',
  }
}

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <ContactForm />
      <Filter />
      <div style={styles.message}>{isLoading && 'Request in progress...👌'}</div>
      <ContactList />
    </div>
  );
};

export default Contacts;
