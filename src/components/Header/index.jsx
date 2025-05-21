import React from 'react';

import styles from'./Header.module.css';
import {Link} from 'react-router-dom'

function Header() {
    
  return (
    <header className={styles.header}>
      <Link to='/'>
       <img src="logo.jpg" alt="Logo" className={styles.logo} />
      </Link>
      <nav>

       
        <Link to ='/'>HOME</Link>
        <Link to ='/especialidades'>ESPECIALIDADES</Link>
         <Link to = '/cartão'>CLINICA</Link>
        <Link to ='/noticias'>NOTICIAS</Link>
        <Link to ='/projetos'>PROJETOS</Link>
        <Link to ='/sobre'>SOBRE</Link>
        
        

      </nav>
    </header>
  );
}

export default Header;