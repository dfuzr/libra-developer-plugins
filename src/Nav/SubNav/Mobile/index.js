import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import universalConfig from '../../../universal-config';
import CloseIcon from '../../../../img/chevron-pressed.svg';
import NavMenuIcon from '../../components/NavMenuIcon';
import OpenIcon from '../../../../img/chevron-down.svg';
import PageIndicator from '../../components/PageIndicator';
import PopupMenu from '../../components/PopupMenu';

import styles from './styles.module.css';

const SubnavMobile = ({activePopupMenu, setPopupMenu}) => {
  const { themeConfig: { navbar: {
    cornerLink, secondaryLinks, logo
  }}} = universalConfig;

  return (
    <div>
      <div className={styles.mainContainer}>
        <PageIndicator />
        <NavMenuIcon
          onClick={() => {setPopupMenu('secondary')}}
          CloseIcon={CloseIcon}
          isOpen={activePopupMenu === 'secondary'}
          OpenIcon={OpenIcon}
        />
      </div>
      {activePopupMenu === 'secondary' && 
        <PopupMenu 
          links={secondaryLinks} 
          onClick={e => e.stopPropagation()}
        />
      }
    </div>
  );
};

SubnavMobile.propTypes = {
  activePopupMenu: PropTypes.string,
  setPopupMenu: PropTypes.func.isRequired,
};

export default SubnavMobile;
