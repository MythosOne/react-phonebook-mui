import img from '../components/img/book-159880.png'

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
        <img src={img} alt='Phonebook' width='240' />
      </h1>
    </section>
  );
};

export default Home;