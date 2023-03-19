
const styles = {
  container: {
    minHeight: 'calc(80vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 54,
    textAlign: 'center',
    color: 'white',
  },
};

const Home = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.title}>
        Phone book manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          😎
        </span>
      </h1>
    </section>
  );
};

export default Home;
