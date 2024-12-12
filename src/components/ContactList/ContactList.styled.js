import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

export const Message = styled.div`
  padding: 0 20px 20px;
  text-align: center;

  font-size: 16px;
  font-weight: 600;
  color: orange;
`;

export const StyledButton = styled(Button)`
  border-radius: 4px;
  min-width: 90px;
  height: 30px;
  text-align: center;
  border: none;
  font-size: 12px;
  background-color: #3f51b5;
  color: white;
  margin: 0 auto;

  &:hover {
    background-color: #3f51b5;
  }
`;
export const StyledTypography = styled(Typography)`
  font-size: 18px;
  color: white;
  text-shadow: 2px 2px 4px black;
`;
