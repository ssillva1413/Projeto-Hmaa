import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to='/' onClick={() => setMenuOpen(false)}>
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

      {/* Ícone hambúrguer (mobile) */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Drawer lateral mobile */}
      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <FaTimes className={styles.closeIcon} onClick={toggleMenu} />
        </div>
        <nav className={styles.drawerMenu}>
          <Link to='/' onClick={toggleMenu}>HOME</Link>
          <Link to='/sobre' onClick={toggleMenu}>SOBRE</Link>
          <Link to='/especialidades' onClick={toggleMenu}>ESPECIALIDADES</Link>
          <Link to='/cartão' onClick={toggleMenu}>CLINICA</Link>
          <Link to='/noticias' onClick={toggleMenu}>NOTICIAS</Link>
          <Link to='/projetos' onClick={toggleMenu}>PROJETOS</Link>
        </nav>
      </div>

      {/* Overlay escuro atrás do menu */}
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
