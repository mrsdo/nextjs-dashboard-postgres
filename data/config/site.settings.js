/** data/config/site.settings.js
 *
 * Function ---------------
 * Site configuration settings
 *
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */

const { metadata } = require('./metadata');

/** @typedef {import("siteSettingsInterface.ts").SiteConfig } */
const siteConfig = {
  ...metadata,
};

module.exports = { siteConfig };
