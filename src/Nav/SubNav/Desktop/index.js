import React from 'react';

import universalConfig from '../../../universal-config';
import NavLink from '../../components/NavLink';
import PageIndicator from '../../components/PageIndicator';

import styles from './styles.module.css';

const SubnavDesktop = () => {
  const { themeConfig: {navbar: {
    secondaryLinks,
  }}} = universalConfig;

  return (
    <div className={styles.root}>
      <PageIndicator />
      <ul className={styles.right}>
        {secondaryLinks.map(props =>
          <NavLink key={props.label} {...props} />
        )}
      </ul>
    </div>
  );
};

export default SubnavDesktop;
