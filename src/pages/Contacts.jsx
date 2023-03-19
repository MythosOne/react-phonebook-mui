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
    width: '444px',
    border: '1px solid rgb(236, 236, 236)',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
    backdropFilter: 'blur(10px)',
  },
  message: {
    padding: '0',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: 'orange',
  },
  section: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <ContactForm />
        <Filter />
        <div style={styles.message}>
          {isLoading && 'Request in progress...👌'}
        </div>
        <ContactList />
      </div>
    </section>
  );
};

export default Contacts;
