import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { discord, email } from '@config';

const StyledContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .email-link {
    ${({ theme }) => theme.mixins.bracketLink};
    margin-top: 50px;
  }
  a {
    padding: 20px;
  }
  h2 {
    text-align: left;
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="section-heading">Contact-Me</h2>

      <p>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Email
      </a>
      <a className="email-link" href={`https://discordapp.com/channels/@me/${discord}/`}>
        Discord
      </a>
    </StyledContactSection>
  );
};

export default Contact;
