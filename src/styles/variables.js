import {css} from 'styled-components';

const variables = css`
  :root {
    --black: #0a0e14;
    --blackish: #131a26;
    --light-black: #4d5566;
    --gray: #c2c1bd;
    --red: #ff3333;
    --green: #c2d94c;
    --orange: #ff9245;
    --dark-orange: #c77133;
    --blue: #59c2ff;
    --yellow: #ffee99;
    --mint: #95e6cb;

    --font-mono: 'Hack', monospace;

    --fz-xxxs: 11px;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    
    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;
