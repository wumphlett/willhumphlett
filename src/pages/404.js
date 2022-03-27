import * as React from "react"
import {Link} from "gatsby"
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--blue);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
  &:before {
    content: '/err/';
    color: var(--blue);
    text-shadow: 0 0 5px;
  }
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bracketLink};
  font-size: var(--fz-lg);
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
  const content = (
    <StyledMainContainer className="fillHeight">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page-Not-Found</StyledSubtitle>
      <StyledHomeButton to="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      <Helmet title="Page Not Found" />
      <>{content}</>
    </Layout>
  );
};

export default NotFoundPage;
