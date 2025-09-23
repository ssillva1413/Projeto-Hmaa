import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // ícones do menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src="logo.jpg" alt="Logo" className={styles.logo} />
      </Link>

      {/* Menu desktop */}
      <nav className={styles.desktopMenu}>
        <Link to='/'>HOME</Link>
        <Link to='/sobre'>SOBRE</Link>
        <Link to='/especialidades'>ESPECIALIDADES</Link>
        <Link to='/cartão'>CLINICA</Link>
        <Link to='/noticias'>NOTICIAS</Link>
        <Link to='/projetos'>PROJETOS</Link>
      </nav>

      {/* Botão hambúrguer (aparece só no mobile) */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          <Link to='/' onClick={toggleMenu}>HOME</Link>
          <Link to='/sobre' onClick={toggleMenu}>SOBRE</Link>
          <Link to='/especialidades' onClick={toggleMenu}>ESPECIALIDADES</Link>
          <Link to='/cartão' onClick={toggleMenu}>CLINICA</Link>
          <Link to='/noticias' onClick={toggleMenu}>NOTICIAS</Link>
          <Link to='/projetos' onClick={toggleMenu}>PROJETOS</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
