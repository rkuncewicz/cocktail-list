// Grab NODE_ENV and folioApp_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const folioApp = /^cocktailApp_/i;

const defaults = {
  // Useful for determining whether we’re running in production mode.
  // Most importantly, it switches React into the correct mode.
  NODE_ENV: process.env.NODE_ENV || 'development',
};

const stringifiedDefaults = {};
Object.keys(defaults).forEach((key) => {
  stringifiedDefaults[key] = JSON.stringify(defaults[key]);
});

function getClientEnvironment(publicUrl) {
  var processEnv = Object
    .keys(process.env)
    .filter(key => folioApp.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, Object.assign({
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      PUBLIC_URL: JSON.stringify(publicUrl),
    }, stringifiedDefaults));
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
