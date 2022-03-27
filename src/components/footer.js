import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
  }
  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      ${({ theme }) => theme.mixins.bracketLink};
      padding: 10px;
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--gray);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    ${({ theme }) => theme.mixins.bracketLink};
    padding: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  {name}
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <div>Built with inspo from <a href="https://github.com/bchiang7/v4">Brittany Chiang</a> &amp; <a href="https://adventofcode.com/">AoC</a></div>
        <div>Source on <a href="https://github.com/wumphlett/willhumphlett">GitHub</a></div>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
