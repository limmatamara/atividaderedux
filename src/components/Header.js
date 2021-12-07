import React from 'react';
import styles from './Header.module.css';
import logo from '../images/logo.jpg'; 
import Menu from './Menu';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img src={logo} alt="Logo Github" />        
      </div>

      <div className={styles.menuContainer}>
        <Menu/>
      </div>
    </div>
  )
}

export default Header;
