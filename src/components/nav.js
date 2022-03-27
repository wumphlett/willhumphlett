import React from "react";
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { IconLogo } from '@components/icons';
import { Menu } from '@components';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--black);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${props => !props.scrolledToTop && css`
    transform: translateY(0px);
    background-color: rgba(10, 14, 20, 0.85);
    box-shadow: 0 10px 30px -10px var(--black);
  `};
  
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--dark-orange);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--blue);
      width: 42px;
      height: 42px;
      &:hover,
      &:focus {
        svg {
          filter: drop-shadow(0 0 6px var(--blue));
        }
      }
      &:before {
        content: none;
      }
      &:after {
        content: none;
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-sm);
      a {
        padding: 10px;
      }
    }
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;
// IconLogo & Menu
const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <>
          <div className="logo" tabIndex="-1">
            <Link to="/" aria-label="home">
              <IconLogo />
            </Link>
          </div>

          <StyledLinks>
            <ol>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url} className="bracket-link">{name}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bracket-link">Resume</Link>
                </li>
            </ol>
          </StyledLinks>

          <Menu/>
        </>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
