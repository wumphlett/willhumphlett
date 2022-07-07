import {createGlobalStyle} from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: 30px;
    scrollbar-width: thin;
    scrollbar-color: var(--gray) var(--black);
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: var(--gray);
    font-family: var(--font-mono);
    font-size: var(--fz-xl);
    line-height: 1.3;
    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }
    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }
    &.fillHeight {
      padding: 0 150px;
      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--gray);
    line-height: 1.1;
  }
  
  em {
    font-style: normal;
    text-shadow: 0 0 5px;
    color: var(--mint);
  }

  .ascii {
    font-size: var(--fz-ascii);
    text-shadow: 0px 0.5px, 0.5px 0px, 0.5px 0.5px;
    white-space: pre;
    font-weight: 900;
  }
  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }
  .small-heading {
    margin: 0;
    font-size: clamp(35px, 4.5vw, 50px);
  }
  .section-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
    text-shadow: 0 0 5px;
    &:before {
      content: '/hdng/';
      position: relative;
      color: var(--blue);
      font-family: var(--font-mono);
      font-size: clamp(26px, 5vw, var(--fz-heading));
      font-weight: 400;
      text-shadow: 0 0 5px;
      @media (max-width: 700px) {
        content: '/h/';
      }
    }
  }
  
  button {
    transition: var(--transition);
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--orange);
      text-shadow: 0 0 5px
    }
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    &.bracket-link {
      ${({ theme }) => theme.mixins.bracketLink};
    }
  }

  p {
    margin: 0 0 15px 0;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`;

export default GlobalStyle;
