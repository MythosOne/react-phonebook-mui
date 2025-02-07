import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { LoginForm } from '../components/LoginForm/LoginForm';

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
};

const Login = () => {
  const nodeRef = useRef(null);

  return (
    <section style={styles.container}>
      <Transition in={true} appear={true} timeout={300} nodeRef={nodeRef}>
        {state => (
          <LoginForm
            ref={nodeRef}
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

export default Login;
