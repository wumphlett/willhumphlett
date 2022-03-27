import React from 'react';
import styled from 'styled-components';
import { About, Contact, Featured, Hero, Jobs, Layout } from '@components';

const StyledMainContainer = styled.main`

`;

// <Projects/> after Featured
const IndexPage = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero/>
      <About/>
      <Jobs/>
      <Featured/>
      <Contact/>
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;
