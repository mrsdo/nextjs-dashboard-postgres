/** data/config/siteSettingsInterface.js
 *
 * Function ---------------
 * Configures interface for Site Metadata
 *
 * ------------------------
 *
 * Author | workflow
 * mrsdo@29signals.com | GitHub: https://github.com/mrsdo
 */

export interface SiteMetadata {
  title: string;
  description: string;
  domain: string;
  logoTitle: string;
  socialBanner: string;
  supportEmail: string;

  email: string;
  twitter: string;
  instagram: string;
  tiktok: string;
  github: string;
  linkedin: string;
  youtube: string;
  facebook: string;
  threads: string;
  mastodon: string;

  language: string;
  theme: 'system' | 'dark' | 'light';
  locale: string;
}

