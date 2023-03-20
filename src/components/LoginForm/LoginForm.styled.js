import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

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

export const StyledTextField = styled(TextField)`
  & input {
    font-size: 20px;
    color: white;
  }

  & label {
    font-size: 20px;
    color: white;
  }

  & label.Mui-focused {
    color: white;
    font-weight: 600;
  }

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 4px;
  width: 160px;
  height: 40px;
  text-align: center;
  border: none;
  font-size: 16px;
  font-weight: 600;
  background-color: #3f51b5;
  color: white;
  margin: 0 auto;

    &:hover {
    background-color: #3f51b5;
  }
`;
