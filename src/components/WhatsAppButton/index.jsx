import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsappButton.module.css";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/558888724728" 
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp}
    >
      <FaWhatsapp size={40} />
    </a>
  );
};
export default WhatsappButton;
