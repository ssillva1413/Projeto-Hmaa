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

       
        <Link to ='/'>Home</Link>
        <Link to ='/sobre'>Sobre</Link>
        <Link to ='/especialidades'>Especialidades</Link>
        <Link to ='/projetos'>Projetos</Link>
        <Link to = '/cartão'>Clínica/Cartão</Link>
      </nav>
    </header>
  );
}

export default Header;