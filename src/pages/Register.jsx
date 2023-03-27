import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
}

const Register = () => {
  return (
    <section style={styles.container}>
      <RegisterForm />
    </section>
  );
};

export default Register;
