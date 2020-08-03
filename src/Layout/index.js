import React from 'react';
import ReactDOM from 'react-dom';
import CookieConsent from 'react-cookie-consent';

import Head from '@docusaurus/Head';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AnnouncementBar from '@theme/AnnouncementBar';
import TabGroupChoiceProvider from '@theme/TabGroupChoiceProvider';
import ThemeProvider from '@theme/ThemeProvider';

import Nav from '../Nav';
import Footer from '../Footer';

import classnames from 'classnames';
import styles from './styles.module.css';
import '../universal.css';

export const OVERFLOW_CONTAINER_CLASS = styles.navPusher;

// Provided via plugins/react-axe-ada-monitoring
if (TEST_ADA) {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

function Layout(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    customFields: {segmentPermissionCookie},
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
        </Head>
        <AnnouncementBar />
        <div>
          <Nav />
          <div className={styles.navSpacer}></div>
        </div>
        <div className={OVERFLOW_CONTAINER_CLASS}>
          <div className={classnames("main-wrapper", {
            "width-wrapper": containWidth,
          })}>
            {children}
          </div>
          {!noFooter && <Footer />}
          <CookieConsent
            buttonClasses={classnames(styles.cookieButton, styles.cookieAccept)}
            buttonText="I accept"
            cookieName={segmentPermissionCookie}
            contentClasses={classnames(styles.cookieContent, "width-wrapper")}
            declineButtonClasses={classnames(styles.cookieButton, styles.cookieDecline)}
            declineButtonText="I do not accept"
            enableDeclineButton
            expires={365}
            flipButtons
            location="bottom"
            onAccept={() => window.loadSegment()}
          >
            <h2 className={styles.title}>Our use of cookies</h2>
            <p>
              We use necessary cookies to enable our site to work for users. To help us provide relevant content, analyze our traffic, and provide a variety of personalized features to users, we also use certain optional cookies.
By clicking “I accept,” you consent to the use of optional cookies on our website. You can also view our Cookie Policy for more information about the cookies we use on our website. <a href="https://libra.org/privacy/#cookies_policy">Read our Cookie Policy</a>.
            </p>
          </CookieConsent>
        </div>
      </TabGroupChoiceProvider>
    </ThemeProvider>
  );
}

export default Layout;
