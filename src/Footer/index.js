import React from 'react';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Logo from 'img/shared/logo.svg';
import universalConfig from '../universal-config';
import SocialLinks from './SocialLinks';

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
          {links.map(({ items, type }) => (
            <ul className={classnames(styles.linkList, styles[type])}>
              {items.map(({ label, to }) => (
                <li className={styles[type]}>
                  <a href={to}>{label}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className={styles.connect}>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        <div className={styles.copyright}>{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
