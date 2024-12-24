import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../redux/auth/operations';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
  },
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async userData => {
    try {
      const resultAction = await dispatch(register(userData));
      unwrapResult(resultAction);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed. Please try again.', error);
    }
  };

  return (
    <section style={styles.container}>
      <RegisterForm onSubmit={handleRegister} />
    </section>
  );
};

export default Register;
