import styled from 'styled-components';

export const AddRegisterForm = styled.form`
  width: 400px;
  height: 500px;;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 20px;
  border: 2px solid rgb(236, 236, 236);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  backdrop-filter: blur(10px);

  transform: scale(1);
  transition: transform 0.5s ease, height 0.2s ease ;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  margin-top: 20px;
`;
