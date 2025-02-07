import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const AddContactForm = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
`;

export const StyledButton = styled(Button)`
  border-radius: 4px;
  width: 180px;
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
