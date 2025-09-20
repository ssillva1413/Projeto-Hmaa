import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./NoticiasDetalhes.module.css";
import noticias from "./Data";

function NoticiasDetalhe() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) {
    return (
      <div className={styles.container}>
        <h2>Notícia não encontrada</h2>
        <Link to="/noticias" className={styles.backButton}>
          ← Voltar para Notícias
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{noticia.titulo}</h1>
      <p className={styles.date}>{noticia.data}</p>

      <div className={styles.authors}>
        {noticia.autores.map((autor, index) => (
          <p key={index}>{autor}</p>
        ))}
      </div>

      {noticia.imagem && (
        <img
          src={noticia.imagem}
          alt={noticia.titulo}
          className={styles.image}
        />
      )}

      {noticia.texto && <p className={styles.content}>{noticia.texto}</p>}

      <div className={styles.tags}>
        {noticia.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {noticia.conteudo &&
        noticia.conteudo.map((bloco, index) => (
          <div key={index} className={styles.block}>
            {bloco.tipo === "texto" && <p>{bloco.valor}</p>}
            {bloco.tipo === "imagem" && (
              <img
                src={bloco.valor}
                alt={`Imagem ${index}`}
                className={styles.image}
              />
            )}
          </div>
        ))}

      <Link to="/noticias" className={styles.backButton}>
        ← Voltar para Notícias
      </Link>
    </div>
  );
}

export default NoticiasDetalhe;
