import React from 'react';
import styles from './HeaderInfo.module.css';
import { FaFacebookF, FaInstagram, FaHeadset } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderInfo() {
  return (
    <div className={styles.headerInfo}>
      <div className={styles.ouvidoria}>
        <FaHeadset className={styles.ouvidoriaIcon} />
        <Link to="/ouvidoria" className={styles.ouvidoriaLink}>
         Fale Conosco
        </Link>
      </div>

      <div className={styles.socialMedia}>
        <span className={styles.socialText}>Siga nossas redes sociais:</span>
        <a
          href="https://www.facebook.com/HospitalAgenorAraujo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com/hosp_agenoraraujo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default HeaderInfo;
