import { createGlobalStyle } from 'styled-components';

const padding = 12;
const gutter = 27;
const column = 40.5;
// const margin = 40.5;

const containerXS = 6 * column;
const containerSM = 8 * column;
const containerMD = 10 * column;
const containerLG = 12 * column;

const Structure = createGlobalStyle`

.container {
  width: 100%;
  margin: 0 auto;


  @media screen and (min-width: 60em) {
    margin: 0 ${containerLG}%;
  }

  @media screen and (min-width: 45rem) {
    margin: 0 ${containerMD}%;
  }

  @media screen and (min-width: 35em) {
    margin: 0 ${containerSM}%;
    /* margin: ${gutter}px; */
  }

  @media screen and (min-width: 0em) {
    margin: 0 ${containerXS}%;
    /* margin: ${padding}px; */
  }
}
`;

export default Structure;