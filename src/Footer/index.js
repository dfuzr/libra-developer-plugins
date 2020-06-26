import React from 'react';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Logo from 'img/shared/logo.svg';
import SocialLinks from './SocialLinks';
import universalConfig from '../universal-config';
import {WithBackgroundImage} from 'libra-docusaurus';

import classnames from 'classnames';
import styles from './styles.module.css';

const Footer = () => {
  const {themeConfig = {}} = universalConfig;
  const {footer, logo} = themeConfig;

  const {copyright, links = [], socialLinks} = footer || {};

  return (
    <footer>
      <div className={styles.spacer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href={logo.to}>
              <Logo alt={logo.alt} />
            </a>
          </div>
          {links.map(({ items, type }, i) => (
            <ul className={classnames(styles.linkList, styles[type])} key={i}>
              {items.map(({ label, to }) => (
                <li className={styles[type]} key={`${label}${to}`}>
                  <a href={to}>{label}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className={styles.connect}>
            <SocialLinks links={socialLinks} />
            <WithBackgroundImage 
              className={styles.newsletter}
              href="https://developers.libra.org/newsletter_form"
              imageLight="/img/shared/newsletter.svg"
              imageDark="img/shared/newsletter-dark.svg"
              tag="a" 
              target="_blank"
              type="button"
            >
              Join the Newsletter
            </WithBackgroundImage>
          </div>
        </div>
        <div className={styles.copyright}>{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
