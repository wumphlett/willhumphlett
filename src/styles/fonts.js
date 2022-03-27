import {css} from 'styled-components';

import HackRegularWoff from '@fonts/Hack/Hack-Regular.woff';
import HackRegularWoff2 from '@fonts/Hack/Hack-Regular.woff2';
import HackBoldWoff from '@fonts/Hack/Hack-Bold.woff';
import HackBoldWoff2 from '@fonts/Hack/Hack-Bold.woff2';

import HackItalicWoff from '@fonts/Hack/Hack-Italic.woff';
import HackItalicWoff2 from '@fonts/Hack/Hack-Italic.woff2';
import HackBoldItalicWoff from '@fonts/Hack/Hack-BoldItalic.woff';
import HackBoldItalicWoff2 from '@fonts/Hack/Hack-BoldItalic.woff2';

const hackNormalWeights = {
  400: [HackRegularWoff, HackRegularWoff2],
  600: [HackBoldWoff, HackBoldWoff2],
};

const hackItalicWeights = {
  400: [HackItalicWoff, HackItalicWoff2],
  600: [HackBoldItalicWoff, HackBoldItalicWoff2],
};

const hack = {
  name: 'Hack',
  normal: hackNormalWeights,
  italic: hackItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];
    styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `;
  }

  return styles;
};

const hackNormal = createFontFaces(hack);
const hackItalic = createFontFaces(hack, 'italic');

const Fonts = css`
  ${hackNormal + hackItalic}
`;

export default Fonts;
