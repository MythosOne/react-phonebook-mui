import { LoginForm } from '../components/LoginForm/LoginForm';

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const Login = () => {
  return (
    <section style={styles.container}>
      <LoginForm />
    </section>
  );
};

export default Login;
