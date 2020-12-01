module.exports = {
  title: 'Diem',
  tagline: 'A New Global Payment System',
  baseUrl: '/',
  organizationName: 'diem',
  projectName: 'diem',
  themeConfig: {
    logo: {
      alt: 'Diem Logo',
      to: 'https://diem.com/'
    },
    footer: {
      links: [
        {
          type: 'primary',
          items: [
            {
              label: 'Vision',
              to: 'https://diem.com/vision/',
            },
            {
              label: 'Association',
              to: 'https://diem.com/association/',
            },
            {
              label: 'Developers',
              to: 'https://diem.com/developers/',
            },
            {
              label: 'Learn',
              to: 'https://diem.com/learn-faqs/',
            },
          ]
        },
        {
          type: 'primary',
          items: [
            {
              label: 'Media',
              to: 'https://diem.com/media-press-news/',
            },
            {
              label: 'White Paper',
              to: 'https://diem.com/white-paper/',
            },
            {
              label: 'Careers',
              to: 'https://diem.com/careers/',
            },
          ],
        },
        {
          type: 'secondary',
          items: [
            {
              label: 'Privacy',
              to: 'https://diem.com/privacy/',
            },
            {
              label: 'Cookies',
              to: 'https://diem.com/privacy/#cookies_policy',
            },
            {
              label: 'Terms of Use',
              to: 'https://diem.com/privacy/#terms_of_use',
            },
            {
              label: 'Code of Conduct',
              to: 'https://developers.diem.com/docs/policies/code-of-conduct',
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
        href: 'https://diem.com',
      },
      primaryLinks: [
        {
          label: 'Vision',
          to: 'https://diem.com/vision/',
        },
        {
          label: 'Association',
          to: 'https://diem.com/association/',
        },
        {
          id: 'developers',
          label: 'Developers',
          to: 'https://diem.com/developers/',
        },
        {
          label: 'Learn',
          to: 'https://diem.com/learn-faqs/',
        },
        {
          label: 'Media',
          to: 'https://diem.com/media-press-news/',
        },
      ],
      cornerLink: {
        label: 'White Paper',
        to: 'https://diem.com/white-paper/',
        image: {
          alt: 'Diem Whitepaper',
        }
      },
      secondaryLinks: [
        {
          id: 'developers',
          label: 'Diem Documentation',
          to: 'https://developers.diem.com/docs/welcome-to-diem',
        },
        {
          id: 'dips',
          label: 'Governance',
          to: 'https://dip.diem.com/',
        },
        {
          label: 'Community',
          to: 'https://community.diem.com/',
        },
        {
          isExternal: true,
          label: 'GitHub',
          to: 'https://github.com/diem/',
        }
      ],
    },
  },
};
