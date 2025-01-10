import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../redux/auth/operations';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Transition } from 'react-transition-group';

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
    marginTop: '40px',
  },
  initial: {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 300ms ease-out, transform 300ms ease-out',
  },
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  const handleRegister = async userData => {
    try {
      const resultAction = await dispatch(register(userData));
      unwrapResult(resultAction);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed. Please try again.', error);
    }
  };

  return (
    <section style={styles.container}>
      <Transition in={true} appear={true} timeout={300} nodeRef={nodeRef}>
        {state => (
          <RegisterForm
            ref={nodeRef}
            onSubmit={handleRegister}
            style={{
              ...styles.initial,
              ...(state === 'entered' && styles.entered),
            }}
          />
        )}
      </Transition>
    </section>
  );
};

export default Register;
