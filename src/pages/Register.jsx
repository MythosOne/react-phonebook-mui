import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const Register = () => {
  return (
    <div style={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default Register;
