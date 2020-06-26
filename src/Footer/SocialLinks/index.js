import React from 'react';

import Facebook from '../img/facebook.svg';
import LinkedIn from '../img/linked-in.svg';
import Twitter from '../img/twitter.svg';
import Instagram from '../img/instagram.svg';
import Github from '../img/github.svg';

import styles from './styles.module.css';

const Link = ({to, icon}) => (
  <li>
    <a href={to}>
      {icon}
    </a>
  </li>
);

const SocialLinks = ({
  links: {
    facebook,
    linkedIn,
    twitter,
    instagram,
    github,
  }
}) => {
  return (
    <ul className={styles.root}>
      {facebook && <Link to={facebook} icon={<Facebook />} />}
      {linkedIn && <Link to={linkedIn} icon={<LinkedIn />} />}
      {twitter && <Link to={twitter} icon={<Twitter />} />}
      {instagram && <Link to={instagram} icon={<Instagram />} />}
      {github && <Link to={github} icon={<Github />} />}
    </ul>
  );
};

export default SocialLinks;
