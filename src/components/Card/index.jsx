import React from "react";
import styles from "./Card.module.css";
import { ArrowRight, Link } from 'lucide-react';

function Card({ imagem, titulo, data, texto }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.date}>{data}</p>
        <p className={styles.text}>{texto}</p>
        <a href={Link} className={styles.link}>
          Leia mais <span className={styles.arrow}>→</span>
        </a>
      </div>
    </div>
  );
}
export default Card;
