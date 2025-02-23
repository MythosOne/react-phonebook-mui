import { useRef, useState } from 'react';

import { Transition } from 'react-transition-group';
import { WelcomeBanner } from 'components/WelcomeBanner/WelcomeBanner';

const styles = {
  container: {
    minHeight: '60vh',
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
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const nodeRef = useRef(null);

  const handleImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <section style={styles.container}>
      <Transition in={isImageLoaded} timeout={300} nodeRef={nodeRef}>
        {state => (
          <WelcomeBanner
            ref={nodeRef}
            style={{
              ...styles.initial,
              ...(state === 'entered' && styles.entered),
            }}
            onImageLoad={handleImageLoaded}
          />
        )}
      </Transition>
    </section>
  );
};

export default Home;
