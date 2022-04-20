import React from 'react';
import styled from 'styled-components';
import { discord, email } from '@config';

const StyledContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .contact-link {
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
        I am not currently looking for new opportunities, but my inbox is always open.
        If you have a question or wish to collaborate on something please don't hesitate to reach out, I'll get back to you as soon as I can!
      </p>

      <a className="contact-link" href={`mailto:${email}`}>
        Email
      </a>
      <a className="contact-link" href={`https://discordapp.com/channels/@me/${discord}/`}>
        Discord
      </a>
    </StyledContactSection>
  );
};

export default Contact;
