import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/contacts/selectors';

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
    padding: '0 20px 20px',
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
    // marginTop: '40px',
  },
};

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const nodeRef = useRef(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section style={styles.section}>
      <Transition in={true} appear={true} timeout={300} nodeRef={nodeRef}>
        {state => (
          <div
            ref={nodeRef}
            style={{
              ...styles.container,
              ...(state === 'entered' && { ...styles.entered }),
            }}
          >
            <ContactForm />
            <Filter />
            <ContactList />
            {isLoading && (
              <div style={styles.message}>Request in progress...👌</div>
            )}
          </div>
        )}
      </Transition>
    </section>
  );
};

export default Contacts;
