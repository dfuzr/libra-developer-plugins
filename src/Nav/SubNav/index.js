import React from 'react';
import PropTypes from 'prop-types';
import { Breakpoint } from 'react-socks';
import Desktop from './Desktop';
import Mobile from './Mobile';
import styles from './styles.module.css';

const Subnav = ({activePopupMenu, enableSearch, setPopupMenu}) => (
  <div className={styles.root}>
    <div className="width-wrapper">
      <Breakpoint medium down>
        <Mobile 
          activePopupMenu={activePopupMenu} 
          enableSearch={enableSearch}
          setPopupMenu={setPopupMenu} 
        />
      </Breakpoint>
      <Breakpoint large up>
        <Desktop enableSearch={enableSearch} />
      </Breakpoint>
    </div>
  </div>
);

Subnav.propTypes = {
  activePopupMenu: PropTypes.string,
  enableSearch: PropTypes.bool,
  setPopupMenu: PropTypes.func.isRequired,
};

export default Subnav;
