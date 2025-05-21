import React from 'react';
import styles from './Projetos.module.css';
import { Link } from 'react-router-dom';

function Projetos() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>PROJETOS</h1>

      <div className={styles.card}>
        <div className={styles.cardContent}>
        <img
          src="img1.jpeg"
          alt="Imagem lateral esquerda"
          className={styles.imgLateral}
        />
        <img
          src="maos_que_cuidam.jpg"
          alt="Logo Mãos que Cuidam"
          className={styles.logo}
        />
        <img
          src="img2.jpeg"
          alt="Imagem lateral direita"
          className={styles.imgLateral}
        />
        </div>
        <Link to="/projetos/maosquecuidam" className={styles.botao}>
          Saiba mais...
        </Link>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.texto}>
            <h2 className={styles.subtitulo}>PROADI-SUS</h2>
            <p className={styles.destaque}>Saúde em nossas mãos.</p>
            <p>
              O Hospital e Maternidade Dr. Agenor Araújo participa do Projeto PROADI-SUS –
               Saúde em Nossas Mãos, com o objetivo de aprimorar a segurança do paciente nas
                UTIs e reduzir infecções hospitalares.
            </p>
            <p>
              A metodologia do projeto incentiva a participação ativa de todos os envolvidos,
               promovendo o conceito de “todos ensinam e todos aprendem”. Além disso, protocolos
                de higienização das mãos serão aprimorados, reforçando o compromisso com práticas
                 seguras e eficazes no ambiente hospitalar.
            </p>
            <Link to="/projetos/proadi-sus" className={styles.botao}>
              Saiba mais...
            </Link>
          </div>
          <img
            src="/projetos/proadi.jpg"
            alt="Imagem do Projeto PROADI-SUS"
            className={styles.imgLateral}
          />
        </div>
      </div>
    </section>
  );
}

export default Projetos;
