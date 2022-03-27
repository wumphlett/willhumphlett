import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--orange);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      color: var(--orange);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--orange) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--orange);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  bracketLink: css`
    transition: var(--transition);
    color: var(--dark-orange);
    &:hover,
    &:focus,
    &:active {
      color: var(--orange);
      text-shadow: 0 0 5px;
    }
    &:before {
      content: '[';
    }
    &:after {
      content: ']';
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-xs);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '>';
        position: absolute;
        left: 0;
        color: var(--mint);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
