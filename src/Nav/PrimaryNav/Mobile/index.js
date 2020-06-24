import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import CloseIcon from '../../../../img/close.svg';
import universalConfig from '../../../universal-config';
import CornerLink from '../../../../img/white-paper.svg';
import Logo from '../../../../img/logo.svg';
import OpenIcon from '../../../../img/vertical-ellipse.svg';
import PopupMenu from '../../components/PopupMenu';
import NavLink from '../../components/NavLink';
import NavMenuIcon from '../../components/NavMenuIcon';

import navStyles from '../../styles.module.css';
import styles from './styles.module.css';

const PrimaryMobile = ({ activePopupMenu, setPopupMenu } ) => {
  const { themeConfig: {navbar: {
    cornerLink, primaryLinks, logo,
  }}} = universalConfig;

  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <NavMenuIcon
          onClick={() => {setPopupMenu('primary')}}
          CloseIcon={CloseIcon}
          isOpen={activePopupMenu === 'primary'}
          OpenIcon={OpenIcon}
        />

        <a href={logo.href}>
          <Logo alt={logo.alt} className={navStyles.logo} />
        </a>
        <a className={styles.cornerLink} href={cornerLink.to}>
          <CornerLink alt={cornerLink.alt} />
        </a>
      </div>
      {activePopupMenu === 'primary' && 
        <PopupMenu links={primaryLinks} />
      }
    </div>
  );
};

PrimaryMobile.propTypes = {
  activePopupMenu: PropTypes.string,
  setPopupMenu: PropTypes.func.isRequired,
};

export default PrimaryMobile;
