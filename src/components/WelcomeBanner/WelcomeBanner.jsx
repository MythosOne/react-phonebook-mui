import { forwardRef } from 'react';
import { Wrapper, Title, Img } from './WelcomeBanner.styled';
import img from '../img/phone.png';

export const WelcomeBanner = forwardRef(({ onImageLoad, style }, ref) => {
  return (
    <Wrapper ref={ref} style={style}>
      <Title>Phone book manager welcome page</Title>
      <Img
        src={img}
        alt="Phonebook"
        loading="lazy"
        onLoad={onImageLoad}
      />
    </Wrapper>
  );
});
