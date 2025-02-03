import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  /* width: 70%; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  backdrop-filter: blur(10px);

  > nav {
    display: flex;
  }

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 90%;
    max-width: 800px;
  }

  @media screen and (min-width: 1280px){
    width: 70%;
  }
`;
