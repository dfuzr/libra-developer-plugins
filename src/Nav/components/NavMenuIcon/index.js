import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';

const NavMenuIcon = ({ cb, CloseIcon, isOpen, OpenIcon }) => {
  let iconRef;
  const isOpenRef = useRef(null);
  isOpenRef.current = isOpen;

  useEffect(() => {
    iconRef.addEventListener('click', e => {
      if (!isOpenRef.current) {
        e.stopPropagation();
        cb();
      }
    });
  }, []);

  const Icon = isOpen ? CloseIcon : OpenIcon;

  return (
    <div ref={el => iconRef = el}>
      <Icon className={styles.root} />
    </div>
  );
};

export default NavMenuIcon;
