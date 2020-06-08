import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

import Context from './context';

import PrimaryNav from './PrimaryNav';
import SubNav from './SubNav';

import Variables from 'CSS/variables.module.css';
import styles from './styles.module.css';

setDefaultBreakpoints([
  { small: parseInt(Variables['small-mobile-breakpoint-size']) },
  { medium: parseInt(Variables['medium-tablet-breakpoint-size']) },
  { large: parseInt(Variables['large-tablet-breakpoint-size']) },
  { xlarge: parseInt(Variables['larget-desktop-breakpoint-size']) }
]);

const Navbar = ({ enableSearch, siteID, siteTitle }) => {
  const [activePopupMenu, setActivePopupMenu] = useState(null);

  const setPopupMenu = activePopupMenu => {
    setActivePopupMenu(activePopupMenu);

    if (activePopupMenu !== null) {
      document.querySelector('body').addEventListener('click', function() {
        setActivePopupMenu(null);
      }, { once: true });
    }
  };

  return (
    <BreakpointProvider>
      <Context.Provider value={{ siteTitle, siteID }}>
        <nav aria-label="Libra cross-domain nav" className={styles.root}>
          <PrimaryNav activePopupMenu={activePopupMenu} setPopupMenu={setPopupMenu} />
            <SubNav 
              activePopupMenu={activePopupMenu} 
              enableSearch={enableSearch}
              setPopupMenu={setPopupMenu} 
            />
        </nav>
      </Context.Provider>
    </BreakpointProvider>
  );
};

Navbar.propTypes = {
  enableSearch: PropTypes.bool,
  siteTitle: PropTypes.string.isRequired,
};

export default Navbar;
