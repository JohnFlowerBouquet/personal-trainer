const colors = require('./colors');

const breakpoints = ['425px', '1280px'];
const mediaQueries = {
  medium: `@media screen and (min-width: ${breakpoints[0]})`,
  large: `@media screen and (min-width: ${breakpoints[1]})`,
};

export default {
  breakpoints,
  mediaQueries,
  colors,
};
