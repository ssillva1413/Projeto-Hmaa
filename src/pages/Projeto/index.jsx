import React from 'react';
import styles from './Projetos.module.css';
import { Link } from 'react-router-dom';

function Projetos() {
  return (
    <section className={styles.container}>
      <h1 className={styles.tituloPrincipal}>PROJETOS</h1>

      {/* SESSÃO MÃOS QUE CUIDAM */}
      <section className={styles.sessaoMaos}>
        <div className={styles.sessaoConteudo}>
          <img src="img1.jpeg" alt="Projeto 1" className={styles.imagemLateral} />

          <div className={styles.bannerCentral}>
            <img src="maos_que_cuidam.jpg" alt="Logo Mãos que Cuidam" />
          </div>

          <img src="img2.jpeg" alt="Projeto 2" className={styles.imagemLateral} />
        </div>

        <div className={styles.botaoContainer}>
          <Link to="/projetos/maosquecuidam" className={styles.botao}>
            Saiba mais...
          </Link>
        </div>
      </section>

      {/* SESSÃO PROADI-SUS (mantida, vamos ajustar depois se quiser) */}
      <section className={styles.sessaoProadi}>
        <div className={styles.cardProjetoContent}>
          <div className={styles.textoContent}>
            <h2 className={styles.tituloProjeto}>PROADI-SUS</h2>
            <h3 className={styles.subtituloProjeto}>Saúde em nossas mãos</h3>

            <div className={styles.textoJustificado}>
              <p>
                O hospital é instrumental de garantir Avalia Superior do Brasil e a República. É a saúde de Núcleo Prado, paciente científico e dos domínios linguísticos.
              </p>
              <p>
                Apresentação de escolha horária de participação com os saldos da ambulância, promovendo o aumento de todos os valores e todas características das mãos.
              </p>
            </div>

            <div className={styles.botaoContainer}>
              <Link to="/projetos/proadi-sus" className={styles.botao}>
                Saiba mais...
              </Link>
            </div>
          </div>

          <img 
            src="proadi.jpg" 
            alt="Projeto PROADI-SUS" 
            className={styles.imagemFullHeight} 
          />
        </div>
      </section>
    </section>
  );
}

export default Projetos;
