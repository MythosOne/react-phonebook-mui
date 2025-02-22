import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

import { register } from 'redux/auth/operations';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Transition } from 'react-transition-group';

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
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
  message: {
    zIndex: 1001,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    fontSize: '20px',
    color: 'white',
    textShadow: '2px 2px 4px black',
  },
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showRegForm, setShowRegForm] = useState(true);

  const handleRegister = async userData => {
    try {
      const resultAction = await dispatch(register(userData));
      unwrapResult(resultAction);
      setShowMessage(true);
      setShowRegForm(false);
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <section style={styles.container}>
      {showMessage && (
        <span style={styles.message}>
          Registration successful! <br />
          Please login to continue
        </span>
      )}
      <Transition
        in={showRegForm}
        appear={true}
        timeout={300}
        nodeRef={nodeRef}
      >
        {state =>
          showRegForm && (
            <RegisterForm
              ref={nodeRef}
              onSubmit={handleRegister}
              style={{
                ...styles.initial,
                ...(state === 'entered' && styles.entered),
              }}
            />
          )
        }
      </Transition>
    </section>
  );
};

export default Register;
