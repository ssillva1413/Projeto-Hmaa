import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
   
  return (
    <footer className={styles.footer}>
      
    <div className={styles.information}>
      <h3 className="font-bold text-lg">Fale Conosco</h3>
      <p><FaMapMarkerAlt/>Rua Vicente Bezerra da Costa, 338 - São Sebastião, Iguatu-CE</p>
      <p><FaPhone /> (88) 3581-0011</p>
      <p><FaWhatsapp /> (88) 98872-4728</p>
      <p><FaEnvelope/> admhmaa@gmail.com</p>
    </div>
    <div className={styles.navigation}>
      <h3 className='text-lg font-bold mb-4'> Navegação</h3>
      <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Especialidades</a></li>
      <li><a href="#">Notícias</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Clínica/Cartão</a></li>
      </ul>
    </div>
    <div className={styles.icons}>
      <h3 className='text-lg font-bold mb-4'>Siga-nos</h3>
      <ul>
        <a href="https://www.facebook.com/HospitalAgenorAraujo"><FaFacebook /></a>
        <a href="https://www.instagram.com/hosp_agenoraraujo/" ><FaInstagram /></a>
        <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
      </ul>
    </div>
    <div className={styles.footerBottom}>
    <p>&copy; 2025 Hospital Agenor Araújo - Todos os direitos reservados.</p>
    </div>
    </footer>
  )
}
export default Footer