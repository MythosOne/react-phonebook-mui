import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddRegisterForm = styled(Form)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  margin: 40px auto 0;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0, 0, 0, 0.12);
`;

export const FormikInput = styled(Field)`
  height: 20px;
  border: 2px solid rgb(163 167 167);
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: auto;
  font-size: 16px;
  font-weight: 600;
`;

export const RegButton = styled.button`
  border-radius: 4px;
  width: 100px;
  height: 30px;
  text-align: center;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(63, 81, 181);
  color: white;
  margin: 0 auto;
`;
