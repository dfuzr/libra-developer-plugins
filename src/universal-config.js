module.exports = {
  title: 'Diem',
  tagline: 'A New Global Payment System',
  baseUrl: '/',
  organizationName: 'diem',
  projectName: 'diem',
  themeConfig: {
    logo: {
      alt: 'Diem Logo',
      to: 'https://diem.org/'
    },
    footer: {
      links: [
        {
          type: 'primary',
          items: [
            {
              label: 'Vision',
              to: 'https://diem.org/vision/',
            },
            {
              label: 'Association',
              to: 'https://diem.org/association/',
            },
            {
              label: 'Developers',
              to: 'https://diem.org/developers/',
            },
            {
              label: 'Learn',
              to: 'https://diem.org/learn-faqs/',
            },
          ]
        },
        {
          type: 'primary',
          items: [
            {
              label: 'Media',
              to: 'https://diem.org/media-press-news/',
            },
            {
              label: 'White Paper',
              to: 'https://diem.org/white-paper/',
            },
            {
              label: 'Careers',
              to: 'https://diem.org/careers/',
            },
          ],
        },
        {
          type: 'secondary',
          items: [
            {
              label: 'Privacy',
              to: 'https://diem.org/privacy/',
            },
            {
              label: 'Cookies',
              to: 'https://diem.org/privacy/#cookies_policy',
            },
            {
              label: 'Terms of Use',
              to: 'https://diem.org/privacy/#terms_of_use',
            },
            {
              label: 'Code of Conduct',
              to: 'https://developers.diem.org/docs/policies/code-of-conduct',
            },
          ],
        },
      ],
      socialLinks: {
        facebook: 'https://www.facebook.com/DiemAssociation/',
        linkedIn: 'https://www.linkedin.com/company/diem-association/',
        twitter: 'https://twitter.com/libradev',
        instagram: 'https://www.instagram.com/diem/',
        github: 'https://github.com/diem/diem',
      },
      copyright: `©${new Date().getFullYear()} Diem Association`,
    },
    navbar: {
      title: 'Diem Developers',
      logo: {
        alt: 'Diem Logo',
        href: 'https://diem.org',
      },
      primaryLinks: [
        {
          label: 'Vision',
          to: 'https://diem.org/vision/',
        },
        {
          label: 'Association',
          to: 'https://diem.org/association/',
        },
        {
          id: 'developers',
          label: 'Developers',
          to: 'https://diem.org/developers/',
        },
        {
          label: 'Learn',
          to: 'https://diem.org/learn-faqs/',
        },
        {
          label: 'Media',
          to: 'https://diem.org/media-press-news/',
        },
      ],
      cornerLink: {
        label: 'White Paper',
        to: 'https://diem.org/white-paper/',
        image: {
          alt: 'Diem Whitepaper',
        }
      },
      secondaryLinks: [
        {
          id: 'developers',
          label: 'Diem Documentation',
          to: 'https://developers.diem.org/docs/welcome-to-diem',
        },
        {
          id: 'lips',
          label: 'Governance',
          to: 'https://lip.diem.org/',
        },
        {
          label: 'Community',
          to: 'https://community.diem.org/',
        },
        {
          isExternal: true,
          label: 'Github',
          to: 'https://github.com/diem/',
        }
      ],
    },
  },
};
