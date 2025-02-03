import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 0 20px;
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