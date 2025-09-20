import React from 'react';
import styles from './HeaderInfo.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdRecordVoiceOver } from 'react-icons/md'; // Ícone de Ouvidoria

function HeaderInfo() {
  return (
    <div className={styles.headerInfo}>
      {/* Ouvidoria - lado esquerdo */}
      <div className={styles.ouvidoria}>
        <MdRecordVoiceOver className={styles.ouvidoriaIcon} />
        <a
          href="#"
          className={styles.ouvidoriaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouvidoria
        </a>
      </div>

      {/* Redes sociais - lado direito */}
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
