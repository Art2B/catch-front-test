import { injectGlobal } from 'styled-components';
import OmnesRegular from './assets/fonts/omnes-regular-webfont.otf';
import OmnesSemiBold from './assets/fonts/omnes-semibold-webfont.otf';
import OmnesExtraLight from './assets/fonts/omnes-extralight-webfont.otf';
import OmnesLight from './assets/fonts/omnes-light-webfont.otf';
import OmnesMedium from './assets/fonts/omnes-medium-webfont.otf';

injectGlobal`
  @font-face {
    font-family: 'Omnes';
    src: url(${OmnesRegular});
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Omnes';
    src: url(${OmnesSemiBold});
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Omnes';
    src: url(${OmnesExtraLight});
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Omnes';
    src: url(${OmnesLight});
    font-weight: lighter;
    font-style: normal;
  }
  @font-face {
    font-family: 'Omnes';
    src: url(${OmnesMedium});
    font-weight: bolder;
    font-style: normal;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Omnes', sans-serif;
  }
`;
