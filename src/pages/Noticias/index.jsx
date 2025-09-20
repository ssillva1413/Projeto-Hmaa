import React from "react";
import styles from "./Noticias.module.css";
import { Link } from "react-router-dom";
import noticias from "./Data/index.js"; // caminho corrigido

function Noticias() {
  const [noticiaPrincipal, ...outrasNoticias] = noticias;

  return (
    <div className={styles.container}>
      <h1 className={styles.tituloPagina}>NOTÍCIAS</h1>
      
      {/* Notícia principal */}
      <div className={styles.noticiaPrincipal}>
        <div className={styles.cabecalhoPrincipal}>
          <h2 className={styles.tituloPrincipal}>{noticiaPrincipal.titulo}</h2>
          <div className={styles.autores}>
            {noticiaPrincipal.autores.map((autor, index) => (
              <p key={index} className={styles.autor}>{autor}</p>
            ))}
          </div>
          <p className={styles.dataPrincipal}>{noticiaPrincipal.data}</p>
          <div className={styles.tags}>
            {noticiaPrincipal.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        
        <div className={styles.conteudoPrincipal}>
          <img 
            src={noticiaPrincipal.imagem} 
            alt={noticiaPrincipal.titulo}
            className={styles.imagemPrincipal}
          />
          <div className={styles.textoContainer}>
            <p className={styles.textoPrincipal}>{noticiaPrincipal.texto}</p>
          </div>
        </div>
      </div>

      {/* Outras notícias */}
      <div className={styles.outrasNoticias}>
        <div className={styles.newsDivider1}>
          <h2 className={styles.tituloSecao}>ÚLTIMAS NOTÍCIAS</h2>
        </div>
        <div className={styles.gridCards}>
          {outrasNoticias.map((item, index) => (
            <div key={index} className={styles.cardNoticia}>
              <img 
                src={item.imagem} 
                alt={item.titulo}
                className={styles.cardImagem}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitulo}>{item.titulo}</h3>
                <p className={styles.cardData}>{item.data}</p>
                <p className={styles.cardTexto}>{item.texto}</p>
                <Link to={`/noticias/${index + 1}`} className={styles.leiaMais}>
                  Leia mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Noticias;
