/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rroyhere.id/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapBaseFileName: 'sitemap',
};

module.exports = config;
