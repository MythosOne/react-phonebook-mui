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
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
