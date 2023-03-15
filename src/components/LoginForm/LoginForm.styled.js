import styled from 'styled-components';

export const AddLoginForm = styled.form`
  max-width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  margin: 100px auto 0;
  border: 2px solid rgb(236, 236, 236);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-bottom: 30px;
`;