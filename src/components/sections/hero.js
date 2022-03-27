import React from "react";
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  h1 {
    margin: 0 0 0 0;
    color: var(--mint);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    font-weight: 400;
  }
  .ascii {
    float: left;
    width: fit-content;
  }
  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }
  p {
    margin: 10px 0 10px;
    max-width: 540px;
  }
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <div><h1><em>Hello hello, I'm</em></h1></div>
      <div>
        <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
          &nbsp;_     _  ___  ___      ___{"\n"}
          | | _ | ||   ||   |    |   |     {"\n"}
          | || || ||   ||   |    |   |     {"\n"}
          |       ||   ||   |    |   |     {"\n"}
          |       ||   ||   |___ |   |___  {"\n"}
          |   _   ||   ||       ||       | {"\n"}
          |__| |__||___||_______||_______| {"\n"}
        </p>
        <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
          &nbsp;__   __  __   __  __   __  _______  __   __  ___      _______  _______  _______{"\n"}
          |  | |  ||  | |  ||  |_|  ||       ||  | |  ||   |    |       ||       ||       |{"\n"}
          |  |_|  ||  | |  ||       ||    _  ||  |_|  ||   |    |    ___||_     _||_     _|{"\n"}
          |       ||  | |  ||       ||   |_| ||       ||   |    |   |___   |   |    |   |{"\n"}
          |   _   ||  |_|  ||       ||    ___||   _   ||   |___ |    ___|  |   |    |   |{"\n"}
          |  | |  ||       || ||_|| ||   |    |  | |  ||       ||   |___   |   |    |   |{"\n"}
          |__| |__||_______||_|   |_||___|    |__| |__||_______||_______|  |___|    |___|{"\n"}
        </p>
      </div>
      <div><h3 className="small-heading">I write code.</h3></div>
    </StyledHeroSection>
  )
};

export default Hero;
