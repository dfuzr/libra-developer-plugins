import React from 'react';
import CookieConsent from 'react-cookie-consent';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import classnames from 'classnames';
import styles from './styles.module.css';

const CookieBanner = props => {
  const {siteConfig: {customFields: {
    cookieBannerProps,
    trackingCookieConsent,
  }}} = useDocusaurusContext();

  return (
    <CookieConsent
      buttonClasses={classnames(styles.cookieButton, styles.cookieAccept)}
      buttonText="I accept"
      buttonWrapperClasses="width-wrapper"
      cookieName={trackingCookieConsent}
      contentClasses={classnames(styles.cookieContent, "width-wrapper")}
      declineButtonClasses={classnames(styles.cookieButton, styles.cookieDecline)}
      declineButtonText="I do not accept"
      enableDeclineButton
      expires={365}
      flipButtons
      location="bottom"
      onAccept={() => window.loadAnalytics()}
      {...cookieBannerProps}
    >
      <h2 className={styles.title}>Our use of cookies</h2>
      <p>
        We use necessary cookies to enable our site to work for users. To help us provide relevant content, analyze our traffic, and provide a variety of personalized features to users, we also use certain optional cookies.
      </p>
      <p>
        By clicking “I accept,” you consent to the use of optional cookies on our website. You can also view our Cookie Policy for more information about the cookies we use on our website. <a href="https://libra.org/privacy/#cookies_policy">Read our Cookie Policy</a>.
      </p>
    </CookieConsent>
  );
};

export default CookieBanner;
