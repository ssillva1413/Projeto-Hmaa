import React from 'react';
import styles from './HeaderInfo.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function HeaderInfo() {
  return (
    <div className={styles.headerInfo}>
      <div className={styles.contatos}>
        <span className={styles.whatsapp}>
          <a href="https://wa.me/5588988724728" className={styles.wpp} target="_blank" rel="noopener noreferrer">
            Entre em contato: (88)98872-4728 
          </a>
        </span>
      </div>
      <div className={styles.socialMedia}>
        <span className={styles.socialText}>Siga nossas redes sociais:</span>
        <a href="https://www.facebook.com/HospitalAgenorAraujo" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/hosp_agenoraraujo" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default HeaderInfo;