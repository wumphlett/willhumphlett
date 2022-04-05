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
    font-size: clamp(4px, .70vw, var(--fz-sm));
    margin: 20px 0 0 0;
    @media (max-width: 780px) {
      margin: 15px 0 10px 0;
    }
    @media (max-width: 416px) {
      font-size: clamp(4px, 1.3vw, var(--fz-sm));
    }
  }
  h3 {
    position: relative;
    margin-top: 10px;
    line-height: 0.9;
    top: -15px;
    z-index: 2;
  }
  p {
    margin: 10px 0 10px;
    max-width: 700px;
    &:last-of-type {
      @media (max-width: 416px) {
        margin: 0 0 10px 5px;
      }
      @media (min-width: 1613px) {
        margin: 0 0 10px 15px;
      }
    }
  }
`;

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
      <div>
        <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
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
        <p className="ascii" alt="Will Humphlett" title="Will Humphlett">
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
