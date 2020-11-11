import { createGlobalStyle } from 'styled-components';

// import font from '../assets/fonts/Relevant-Normal.woff';
import bodyFont from '../assets/fonts/freight-text-pro.woff';
import headingFont from '../assets/fonts/ciutadella-regular.woff';

const interval = 1.5;
const scale0 = 1;
const scale00 = (scale0 / interval) * 1.45;
const scale1 = scale0 * interval;
const scale2 = scale1 * interval;

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Freight Text Pro';
    src: url(${bodyFont});
  }
  @font-face {
    font-family: Ciutadella;
    src: url(${headingFont});
  }
  html {
    font-family: var(--body-font), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text);
    font-size: ${(18 / 16) * 100}%;
  }
  body {
    font-size: ${scale0}rem;
    line-height: 1.35;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1 {
    font-size: ${scale2}rem;
  }
  h2, h3 {
    font-size: ${scale1}rem;
  }
  h1, h2, h3, caption {
    font-feature-settings: "lnum" 1, "salt" 1;
  }
  .metadata {
    font-family: var(--heading-font);
    color: var(--accent-text);
    font-size: ${scale00}rem;

    a {
      color: var(--accent-text);
    }
  }
  .body-text {
    font-family: var(--body-font);
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    line-height: 1;
    font-family: var(--heading-font), sans-serif;
    margin: 0;
  }
  
  a {
    color: var(--text);
    font-family: var(--heading-font);
    cursor: pointer;
    /* text-decoration-color: var(--red); */
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration: none;
    transition: all 0.2s;
    /* text-decoration-skip-ink: none; */

    &:hover {
      color: var(--accent);
    }

    &.underline {
      background-image: linear-gradient(to top, var(--accent) 0, var(--accent) .13169rem, rgba(255,102,140,0) .13169rem, rgba(255,102,140,0) 100%);
    }
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
