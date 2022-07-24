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
    font-size: clamp(var(--fz-md), 3.5vw, var(--fz-xl));
    font-weight: 400;
    opacity: 0.8;
  }
  .ascii {
    width: 100vw;
    font-size: clamp(4px, .85vw, var(--fz-xxs));
    @media (max-width: 768px) {
      font-size: clamp(4px, 1.3vw, var(--fz-sm));
    }
  }
  h3 {
    position: relative;
    margin-top: 10px;
    line-height: 0.9;
    top: -15px;
    z-index: 2;
    opacity: 0.8;
  }
  p {
    float: left;
    width: fit-content;
    display: inline-block;
    max-width: 700px;
    margin: 20px 0 0 0;
    @media (max-width: 768px) {
      margin: 15px 0 10px 0;
    }
    &:first-of-type {
      @media (max-width: 768px) {
        margin: 15px 0 0 0;
      }
    }
    &:last-of-type {
      @media (max-width: 768px) {
        margin: 0 0 10px 5px;
      }
    }
  }
`;

// █

/*
oooooo   oooooo     oooo  o8o  oooo  oooo       ooooo   ooooo                                          oooo        oooo                .       .
 `888.    `888.     .8'   `"'  `888  `888       `888'   `888'                                          `888        `888              .o8     .o8
  `888.   .8888.   .8'   oooo   888   888        888     888  oooo  oooo  ooo. .oo.  .oo.   oo.ooooo.   888 .oo.    888   .ooooo.  .o888oo .o888oo
   `888  .8'`888. .8'    `888   888   888        888ooooo888  `888  `888  `888P"Y88bP"Y88b   888' `88b  888P"Y88b   888  d88' `88b   888     888
    `888.8'  `888.8'      888   888   888        888     888   888   888   888   888   888   888   888  888   888   888  888ooo888   888     888
     `888'    `888'       888   888   888        888     888   888   888   888   888   888   888   888  888   888   888  888    .o   888 .   888 .
      `8'      `8'       o888o o888o o888o      o888o   o888o  `V88V"V8P' o888o o888o o888o  888bod8P' o888o o888o o888o `Y8bod8P'   "888"   "888"
                                                                                             888
                                                                                            o888o
*/

const Hero = () => {
  return (
    <StyledHeroSection>
      <div><h1><em>Hello hello, I'm</em></h1></div>
          <div className="ascii">
        <p alt="Will Humphlett" title="Will Humphlett">
          oooooo   oooooo     oooo  o8o  oooo  oooo{"\n"}
          &nbsp;`888.    `888.     .8'   `"'  `888  `888{"\n"}
          &nbsp;&nbsp;`888.   .8888.   .8'   oooo   888   888{"\n"}
          &nbsp;&nbsp;&nbsp;`888  .8'`888. .8'    `888   888   888{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;`888.8'  `888.8'      888   888   888{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`888'    `888'       888   888   888{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`8'      `8'       o888o o888o o888o     {"\n"}
          {"\n"}
          {"\n"}
        </p>
        <p alt="Will Humphlett" title="Will Humphlett">
          ooooo   ooooo                                          oooo        oooo                .       .{"\n"}
          `888'   `888'                                          `888        `888              .o8     .o8{"\n"}
          &nbsp;888     888  oooo  oooo  ooo. .oo.  .oo.   oo.ooooo.   888 .oo.    888   .ooooo.  .o888oo .o888oo{"\n"}
          &nbsp;888ooooo888  `888  `888  `888P"Y88bP"Y88b   888' `88b  888P"Y88b   888  d88' `88b   888     888{"\n"}
          &nbsp;888     888   888   888   888   888   888   888   888  888   888   888  888ooo888   888     888{"\n"}
          &nbsp;888     888   888   888   888   888   888   888   888  888   888   888  888    .o   888 .   888 .{"\n"}
          o888o   o888o  `V88V"V8P' o888o o888o o888o  888bod8P' o888o o888o o888o `Y8bod8P'   "888"   "888"{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;888{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o888o{"\n"}
        </p>
      </div>
          <div><h3 className="small-heading">I write code.</h3></div>
    </StyledHeroSection>
  )
};

export default Hero;
