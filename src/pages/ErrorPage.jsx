import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { Transition } from 'react-transition-group';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  color: #e12605;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 20px;
  color: white;
  text-shadow: 2px 2px 4px black;
  margin-bottom: 20px;
`;

const HomeLink = styled(Link)`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #3248c7;
  }
`;

export const ErrorPage = ({ showLink, title, message }) => {
  const nodeRef = useRef(null);
  return (
    <>
      <Transition in={true} appear={true} timeout={300} nodeRef={nodeRef}>
        {state => (
          <NotFoundContainer
            ref={nodeRef}
            style={{
              opacity: 0,
              transition: 'opacity 300ms ease-out',
              ...(state === 'entered' && { opacity: 1 }),
            }}
          >
            <Title>{title}</Title>
            <Message>{message}</Message>
            {showLink && <HomeLink to="/">Return to home</HomeLink>}
          </NotFoundContainer>
        )}
      </Transition>
    </>
  );
};

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  showLink: PropTypes.bool.isRequired,
};
