const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra()
// server side rendering on netlify
// https://docs.netlify.com/configure-builds/common-configurations/next-js/
module.exports.target = "serverless"
