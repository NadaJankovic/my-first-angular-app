// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api
declare var require: any
declare var module: any
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');
module.exports = (on: (arg0: string, arg1: any) => void, config: { projectRoot: any; }) => {
     const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
     };
     on('file:preprocessor', cucumber(options));
};


