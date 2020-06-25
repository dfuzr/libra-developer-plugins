import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';

import NavLink, { BUTTON_TYPES } from '../../components/NavLink';
import Logo from '../../../../img/logo.svg';
import universalConfig from '../../../universal-config';

import classnames from 'classnames';
import styles from './styles.module.css';
import navStyles from '../../styles.module.css';  

const PrimaryDesktop = () => {
  const { isDarkTheme } = useThemeContext();
  const { themeConfig: {navbar: {
    cornerLink, primaryLinks, logo,
  }}} = universalConfig;

  return (
    <div className={classnames(styles.root, "desktop-only")}>
      <a className={navStyles.logo} href={logo.href}>
        <Logo alt={logo.alt} />
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
