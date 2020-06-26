module.exports = {
  title: 'Libra',
  tagline: 'A New Global Payment System',
  baseUrl: '/',
  organizationName: 'libra',
  projectName: 'libra',
  themeConfig: {
    logo: {
      alt: 'Libra Logo',
      to: 'https://libra.org/'
    },
    footer: {
      links: [
        {
          type: 'primary',
          items: [
            {
              label: 'Vision',
              to: 'https://libra.org/vision/',
            },
            {
              label: 'Learn',
              to: 'https://libra.org/learn-faqs/',
            },
            {
              label: 'Association',
              to: 'https://libra.org/association/',
            },
            {
              label: 'Media',
              to: 'https://libra.org/media-press-news/',
            },
          ]
        },
        {
          type: 'primary',
          items: [
            {
              label: 'Developers',
              to: 'https://libra.org/developers/',
            },
            {
              label: 'White Paper',
              to: 'https://libra.org/white-paper/',
            },
            {
              label: 'Careers',
              to: 'https://libra.org/careers/',
            },
          ],
        },
        {
          type: 'secondary',
          items: [
            {
              label: 'Privacy',
              to: 'https://libra.org/privacy/',
            },
            {
              label: 'Cookies',
              to: 'https://libra.org/privacy/#cookies_policy',
            },
            {
              label: 'Terms of Use',
              to: 'https://libra.org/privacy/#terms_of_use',
            },
            {
              label: 'Code of Conduct',
              to: 'https://developers.libra.org/docs/policies/code-of-conduct',
            },
          ],
        },
      ],
      socialLinks: {
        facebook: 'https://www.facebook.com/LibraAssociation/',
        linkedIn: 'https://www.linkedin.com/company/libra-association/',
        twitter: 'https://twitter.com/libradev',
        instagram: 'https://www.instagram.com/libra/',
        github: 'https://github.com/libra/libra',
      },
      copyright: `©${new Date().getFullYear()} Libra Association`,
    },
    navbar: {
      title: 'Libra Developers',
      logo: {
        alt: 'Libra Logo',
        href: 'https://libra.org',
      },
      primaryLinks: [
        {
          label: 'Vision',
          to: 'https://libra.org/vision/',
        },
        {
          label: 'Association',
          to: 'https://libra.org/association/',
        },
        {
          id: 'developers',
          label: 'Developers',
          to: 'https://libra.org/open-source-developers/',
        },
        {
          label: 'Learn',
          to: 'https://libra.org/learn-faqs/',
        },
        {
          label: 'Media',
          to: 'https://libra.org/media-press-news/',
        },
      ],
      cornerLink: {
        label: 'White Paper',
        to: 'https://libra.org/white-paper/',
        image: {
          src: 'img/shared/white-paper.svg',
          alt: 'Libra Whitepaper',
        }
      },
      secondaryLinks: [
        {
          label: 'Overview',
          to: 'https://libra.org/open-source-developers/',
        },
        {
          id: 'developers',
          label: 'Libra Docs',
          to: 'https://developers.libra.org/docs/welcome-to-libra',
        },
        {
          id: 'lips',
          label: 'Governance',
          to: 'https://lip.libra.org/overview',
        },
        {
          label: 'Community',
          to: 'https://community.libra.org/c/member-portal',
        },
        {
          isExternal: true,
          label: 'Github',
          to: 'https://github.com/libra/libra',
        }
      ],
    },
  },
};
