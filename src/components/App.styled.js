import styled from 'styled-components';
import img from './img/phonebook-website-background.jpg';

export const Container = styled.section`
  background-image: url('${img}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 960px;
  min-height: calc(80vh - 50px);
  margin: 10px auto;
  padding: 0px 10px;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
`;