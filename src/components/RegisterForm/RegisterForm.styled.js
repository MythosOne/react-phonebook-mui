import styled from 'styled-components';

export const AddRegisterForm = styled.form`
  width: 400px;
  height: 400px;;
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 20px;
  /* margin: 100px auto 0; */
  border: 2px solid rgb(236, 236, 236);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  margin-top: 20px;
`;
