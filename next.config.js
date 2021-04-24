
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['spHmxsfqxT3Y3bbaP5ywTe'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  