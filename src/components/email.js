import React from 'react';
import styled from 'styled-components';
import { email } from '@config';
import { Side } from '@components';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
  }
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
