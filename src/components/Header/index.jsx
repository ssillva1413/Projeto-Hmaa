import React from 'react';

import styles from'./Header.module.css';
import {Link} from 'react-router-dom'

function Header() {
    
  return (
    <header className={styles.header}>
      <Link to='/'>
      <span>Hospital e Maternidade Agenor Araújo</span>
      </Link>
      <nav>

       
        <Link to ='/'>HOME</Link>
        <Link to ='/noticias'>NOTICIAS</Link>
        <Link to ='/sobre'>SOBRE</Link>
        <Link to ='/especialidades'>ESPECIALIDADES</Link>
        <Link to ='/projetos'>PROJETOS</Link>
        <Link to = '/cartão'>CLINICA</Link>
      </nav>
    </header>
  );
}

export default Header;