import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCloseAll = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={styles.header}>
      <Link to='/' onClick={handleCloseAll}>
        <img src="logo.jpg" alt="Logo" className={styles.logo} />
      </Link>

      <nav className={styles.desktopMenu}>
        <Link to='/' onClick={handleCloseAll}>HOME</Link>

        <div className={styles.dropdown} ref={dropdownRef}>
          <span
            className={`${styles.dropdownTitle} ${dropdownOpen ? styles.active : ''}`}
            onClick={toggleDropdown}
          >
            SAIBA MAIS
          </span>

          <div
            className={`${styles.dropdownContent} ${
              dropdownOpen ? styles.show : ''
            }`}
          >
            <Link to='/sobre' onClick={handleCloseAll}>SOBRE NÓS</Link>
            <Link to='/especialidades' onClick={handleCloseAll}>ESPECIALIDADES</Link>                  
            <Link to='/filantropia' onClick={handleCloseAll}>FILANTROPIA</Link>
            <Link to='/convenios' onClick={handleCloseAll}>CONVÊNIOS</Link>
            <Link to='/corpo-clinico' onClick={handleCloseAll}>CORPO CLÍNICO</Link>
            <Link to='/duvidas' onClick={handleCloseAll}>DÚVIDAS FREQUENTES</Link>
             <Link to='/trabalhe-conosco' onClick={handleCloseAll}>TRABALHE CONOSCO</Link>
          </div>
        </div>

        <Link to='/cartao' onClick={handleCloseAll}>CLÍNICA</Link>
        <Link to='/noticias' onClick={handleCloseAll}>NOTÍCIAS</Link>
        <Link to='/portal-da-transparencia' onClick={handleCloseAll}>
          PORTAL DA TRANSPARÊNCIA
        </Link>
      </nav>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>

      <div className={`${styles.mobileDrawer} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <FaTimes className={styles.closeIcon} onClick={toggleMenu} />
        </div>

        <nav className={styles.drawerMenu}>
          <Link to='/' onClick={handleCloseAll}>HOME</Link>

          <div className={styles.mobileDropdown}>
            <span onClick={toggleDropdown}>
              SAIBA MAIS
            </span>

            <div
              className={`${styles.dropdownContentMobile} ${
                dropdownOpen ? styles.showMobile : ''
              }`}
            >
              <Link to='/sobre' onClick={handleCloseAll}>SOBRE NÓS</Link>
              <Link to='/especialidades' onClick={handleCloseAll}>ESPECIALIDADES</Link>                        
              <Link to='/filantropia' onClick={handleCloseAll}>FILANTROPIA</Link>
              <Link to='/convenios' onClick={handleCloseAll}>CONVÊNIOS</Link>
              <Link to='/corpo-clinico' onClick={handleCloseAll}>CORPO CLÍNICO</Link>
              <Link to='/duvidas' onClick={handleCloseAll}>DÚVIDAS FREQUENTES</Link> 
              <Link to='/trabalhe-conosco' onClick={handleCloseAll}>TRABALHE CONOSCO</Link>
            </div>
          </div>

          <Link to='/cartao' onClick={handleCloseAll}>CLÍNICA</Link>
          <Link to='/noticias' onClick={handleCloseAll}>NOTÍCIAS</Link>
          <Link to='/portal-da-transparencia' onClick={handleCloseAll}>
            PORTAL DA TRANSPARÊNCIA
          </Link>
        </nav>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;