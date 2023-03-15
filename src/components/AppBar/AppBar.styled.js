import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  box-shadow: 0px 15px 10px -15px #111;
  backdrop-filter: blur(10px);

  > nav {
    display: flex;
  }
`;
