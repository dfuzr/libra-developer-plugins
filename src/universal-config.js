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
    navbar: {
      title: 'Libra Developers',
      logo: {
        alt: 'Libra Logo',
        href: 'https://libra.org',
      },
      primaryLinks: [
        {
          label: 'Vision',
          to: 'https://libra-release.dfuzr.dev/en-US/vision/',
        },
        {
          label: 'Association',
          to: 'https://libra-release.dfuzr.dev/en-US/association/',
        },
        {
          id: 'developers',
          label: 'Developers',
          to: 'https://libra-release.dfuzr.dev/en-US/open-source-developers/',
        },
        {
          label: 'Learn',
          to: 'https://libra-release.dfuzr.dev/en-US/learn-faqs/',
        },
        {
          label: 'Media',
          to: 'https://libra-release.dfuzr.dev/en-US/media-press-news/',
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
          to: 'https://libra.org/en-US/open-source-developers/',
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
