import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '@theme/SearchBar';
import NavLink from '../../components/NavLink';
import PageIndicator from '../../components/PageIndicator';
import styles from './styles.module.css';

import config from '../../../config';

const SubnavDesktop = ({enableSearch}) => {
  const { themeConfig } = config;
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const {navbar} = themeConfig;
  const {secondaryLinks} = navbar;

  return (
    <div className={styles.root}>
      <PageIndicator />
      <ul className={styles.right}>
        {secondaryLinks.map(props =>
          <NavLink key={props.label} {...props} />
        )}
        <li className={styles.search}>
          {enableSearch &&
            <SearchBar
              handleSearchBarToggle={setIsSearchBarExpanded}
              isSearchBarExpanded={isSearchBarExpanded}
            />
          }
        </li>
      </ul>
    </div>
  );
};

SubnavDesktop.propTypes = {
  enableSearch: PropTypes.bool,
}

export default SubnavDesktop;
