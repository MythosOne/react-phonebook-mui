import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
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
    marginBottom: '20px',
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 300ms ease-out, transform 300ms ease-out',
  },
  message: {
    padding: '0',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '600',
    color: 'orange',
  },
  section: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
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
      <Transition in={true} appear={true} timeout={300}>
        {state => (
          <div
            style={{
              ...styles.container,
              ...(state === 'entered' && { ...styles.entered }),
            }}
          >
            <ContactForm />
            <Filter />
            <div style={styles.message}>
              {isLoading ? 'Request in progress...👌' : <ContactList />}
            </div>
          </div>
        )}
      </Transition>
    </section>
  );
};

export default Contacts;
