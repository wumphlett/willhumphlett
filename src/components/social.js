import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
  }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      font-size: var(--fz-sm);
      margin: 5px auto;
      padding: 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      line-height: var(--fz-lg);
      letter-spacing: 0.1em;
      writing-mode: vertical-rl;
      -moz-transform: scale(-1, -1);
      -webkit-transform: scale(-1, -1);
      -o-transform: scale(-1, -1);
      -ms-transform: scale(-1, -1);
      transform: scale(-1, -1);
    }
  }
`;

const Social = () => (
  <Side orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

export default Social;
