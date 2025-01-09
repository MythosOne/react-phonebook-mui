import { forwardRef } from 'react';
import { Title, Img } from './WelcomeBanner.styled';
import img from '../img/phone.png';

export const WelcomeBanner = forwardRef((props, ref) => {
  return (
    <>
      <Title ref={ref} {...props}>
        Phone book manager welcome page
        <Img src={img} alt="Phonebook" loading="lazy" />
      </Title>
    </>
  );
});