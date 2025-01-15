import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Características',
      href: '/#features',
    },

    {
      text: 'Pasos',
      href: '/#steps',
    },
    {
      text: 'Funciones',
      href: '/#functions',
    },
    {
      text: 'Blog',
      href: '/#blog',
    },
    {
      text: 'FAQs',
      href: '/#FAQs',
    },
  ],
  actions: [{ text: 'Iniciar sesión', href: '#', target: '_blank', icon: 'tabler:user' }],
};

// export const headerData = {
//   links: [
//     {
//       text: 'Inicio',
//       href: '/',
//     },
//     {
//       text: 'Pages',
//       links: [
//         {
//           text: 'Características',
//           href: getPermalink('/#features'),
//         },
//         {
//           text: 'Services',
//           href: getPermalink('/services'),
//         },
//         {
//           text: 'Pricing',
//           href: getPermalink('/pricing'),
//         },
//         {
//           text: 'About us',
//           href: getPermalink('/about'),
//         },
//         {
//           text: 'Contact',
//           href: getPermalink('/contact'),
//         },
//         {
//           text: 'Terms',
//           href: getPermalink('/terms'),
//         },
//         {
//           text: 'Privacy policy',
//           href: getPermalink('/privacy'),
//         },
//       ],
//     },

//     {
//       text: 'Blog',
//       href: '/blog',
//     },
//     {
//       text: 'Widgets',
//       href: '#',
//     },
//   ],
//   actions: [
//     { text: 'Iniciar sesión', href: '#', target: '_blank', icon: 'tabler:user' },
//   ],
// };

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },

    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://celadon-pegasus-efbaba.netlify.app/"> Paco Acosta</a> · All rights reserved.
  `,
};
