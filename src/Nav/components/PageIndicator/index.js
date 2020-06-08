import React from 'react';

import Context from '../../context';

import styles from './styles.module.css';

class PageIndicator extends React.Component {
  render() {
    const {siteTitle} = this.context;

    return (
      <div className={styles.root}>
        <span className={styles.primary}><b>Developers</b></span>
        <span className={styles.divider}> / </span>
        <span className={styles.secondary}>{siteTitle}</span>
      </div>
    );
  }
};

PageIndicator.contextType = Context;

export default PageIndicator;
