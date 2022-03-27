import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import { Email, Footer, Head, Nav, Social } from '@components';
import {GlobalStyle, theme} from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const handleExternalLinks = () => {
    if (typeof document !== 'undefined') {
      const allLinks = Array.from(document.querySelectorAll('a'));
      if (allLinks.length > 0) {
        allLinks.forEach(link => {
          if (link.host !== window.location.host) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
          }
        });
      }
    }
  };

  handleExternalLinks();

  return (
    <>
      <Head/>
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <StyledContent>
            <Nav/>
            <Social/>
            <Email/>
            <div id="content">
              {children}
              <Footer/>
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Layout;

