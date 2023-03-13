import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0;
`;

export const ContactsItem = styled.li`
  width: 280px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const DeleteButton = styled.button`
  border-radius: 4px;
  text-align: center;
  border: none;
  font-size: 12px;
  background-color: rgb(63, 81, 181);
  color: white;
`;

export const Message = styled.ul`
  padding: 0;
  text-align: center;

  font-size: 16px;
  font-weight: 600;
  color: orange;
`;
