import styled from 'styled-components';

export const AddLoginForm = styled.form`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 20px;
  border: 2px solid rgb(236, 236, 236);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  backdrop-filter: blur(10px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  margin-top: 20px;
`;