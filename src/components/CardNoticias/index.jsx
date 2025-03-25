import styles from "./CardNoticia.module.css";

function CardNoticia({ titulo, data, descricao }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.date}>{data}</p>
        <p className={styles.description}>{descricao}</p>
      </div>
    </div>
  );
}

export default CardNoticia;
