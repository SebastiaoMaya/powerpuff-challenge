/* eslint-disable @typescript-eslint/no-var-requires */
const env = process.env.REACT_APP_ENV || "development";
const environment = require(`./${env}`);

module.exports = environment;
