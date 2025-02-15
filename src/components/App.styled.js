import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 0 auto;
  padding: 0px 10px;
  max-width: 1024px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  flex-direction: column;
  gap: 20px;
`;

export const LoadingText = styled.span`
  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 4px black;
  margin-bottom: 20px;
`;
