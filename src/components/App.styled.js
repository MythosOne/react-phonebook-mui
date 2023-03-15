import styled from 'styled-components';
import img from './img/phonebook-bg.jpg';

export const Container = styled.section`
  background-image: url('${img}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh
`;