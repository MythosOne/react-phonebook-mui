import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { WelcomeBanner } from 'components/WelcomeBanner/WelcomeBanner';

const styles = {
  container: {
    minHeight: 'calc(80vh - 50px)',
    display: 'flex',
    alignItems: 'center',
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
const Home = () => {
  const nodeRef = useRef(null);
  
  return (
    <section style={styles.container}>
      <Transition in={true} appear={true} timeout={300} nodeRef={nodeRef}>
        {state => (
          <WelcomeBanner
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

export default Home;
