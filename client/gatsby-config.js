import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Gabriel Zarate`,
    siteUrl: 'https://gabrielzzarate.me',
    description: 'The Gabriel Zarate Blog',
    twitter: '@gabrielzzarate',
    instagram: '@gabrielzzarate',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'aj9fjz2g',
    //     dataset: 'production',
    //     watchMode: true,
    //     token: process.env.SANITY_TOKEN,
    //   },
    // },
  ],
};
