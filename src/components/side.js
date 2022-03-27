import React from 'react';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }
  @media (max-width: 900px) {
    display: none;
  }
  a {
    ${({ theme }) => theme.mixins.bracketLink};
  }
`;

const Side = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation}>
      {children}
    </StyledSideElement>
  );
};

export default Side;
