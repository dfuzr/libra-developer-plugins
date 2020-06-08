import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';

import NavLink, { BUTTON_TYPES } from '../../components/NavLink';
import config from '../../../config';

import styles from './styles.module.css';
import navStyles from '../../styles.module.css';

const PrimaryDesktop = () => {
  const { isDarkTheme } = useThemeContext();
  const { themeConfig } = config;
  const { navbar } = themeConfig;
  const { cornerLink, primaryLinks, logo } = navbar;

  return (
    <div className={styles.root}>
      <a className={navStyles.logo} href={logo.href}>
        <img 
          alt={logo.alt} 
          src={useBaseUrl(logo.src)} 
        />
      </a>
      <ul className={styles.right}>
        {primaryLinks.map(props =>
          <NavLink key={props.label} {...props} />
        )}
        <NavLink
          className={styles['corner-link']}
          type={BUTTON_TYPES.CTA}
          {...cornerLink}
        />
      </ul>
    </div>
  );
}

export default PrimaryDesktop
