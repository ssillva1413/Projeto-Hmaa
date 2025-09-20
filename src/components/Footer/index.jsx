import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.topContent}>
        <div className={styles.information}>
          <h3 className="font-bold text-lg">Fale Conosco</h3>
          <p><FaMapMarkerAlt/> Rua Vicente Bezerra da Costa, 338 - São Sebastião, Iguatu-CE</p>
          <p><FaPhone /> (88) 3581-0011</p>
          <p><FaWhatsapp /> (88) 98872-4728</p>
          <p><FaEnvelope/> admhmaa@gmail.com</p>
        </div>

        <div className={styles.navigation}>
          <h3 className='text-lg font-bold mb-4'>Navegação</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/especialidades">Especialidades</Link></li>
            <li><Link to="/noticias">Notícias</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/cartão">Clínica/Cartão</Link></li>
          </ul>
        </div>

        <div className={styles.icons}>
          <h3 className='text-lg font-bold mb-4'>Siga-nos</h3>
          <ul>
            <a href="https://www.facebook.com/HospitalAgenorAraujo" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/hosp_agenoraraujo/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/hospital-agenor-araujo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Hospital Agenor Araújo - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;
