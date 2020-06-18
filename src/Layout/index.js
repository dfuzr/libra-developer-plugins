import React from 'react';
import ReactDOM from 'react-dom';
import Head from '@docusaurus/Head';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ThemeProvider from '@theme/ThemeProvider';
import TabGroupChoiceProvider from '@theme/TabGroupChoiceProvider';
import AnnouncementBar from '@theme/AnnouncementBar';
import Nav from '../Nav';
import Footer from '../Footer';

import classnames from 'classnames';
import './styles.css';
import '../universal.css';

// Provided via plugins/react-axe-ada-monitoring
if (TEST_ADA) {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

function Layout(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    favicon,
    title: siteTitle,
    themeConfig: {image: defaultImage},
    url: siteUrl,
  } = siteConfig;
  const {
    containWidth = true,
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    permalink,
    version,
  } = props;
  console.log('contain width?', containWidth);
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  const metaImage = image || defaultImage;
  let metaImageUrl = siteUrl + useBaseUrl(metaImage);
  if (!isInternalUrl(metaImage)) {
    metaImageUrl = metaImage;
  }

  const faviconUrl = useBaseUrl(favicon);

  return (
    <ThemeProvider>
      <TabGroupChoiceProvider>
        <Head>
          {/* TODO: Do not assume that it is in english language */}
          <html lang="en" />

          {metaTitle && <title>{metaTitle}</title>}
          {metaTitle && <meta property="og:title" content={metaTitle} />}
          {favicon && <link rel="shortcut icon" href={faviconUrl} />}
          {description && <meta name="description" content={description} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          {version && <meta name="docsearch:version" content={version} />}
          {keywords && keywords.length && (
            <meta name="keywords" content={keywords.join(',')} />
          )}
          {metaImage && <meta property="og:image" content={metaImageUrl} />}
          {metaImage && (
            <meta property="twitter:image" content={metaImageUrl} />
          )}
          {metaImage && (
            <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
          )}
          {permalink && (
            <meta property="og:url" content={siteUrl + permalink} />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <script type="text/javascript" src="/js/segment.js" />
        </Head>
        <AnnouncementBar />
        <div>
          <Nav />
          <div className="nav-spacer"></div>
        </div>
        <div className="nav-pusher">
          <div className={classnames("main-wrapper", {
            "width-wrapper": containWidth,
          })}>
            {children}
          </div>
          {!noFooter && <Footer />}
        </div>
      </TabGroupChoiceProvider>
    </ThemeProvider>
  );
}

export default Layout;
