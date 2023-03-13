import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
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

export const AddButton = styled.button`
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
