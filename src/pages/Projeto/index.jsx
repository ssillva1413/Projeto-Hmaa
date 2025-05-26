import React from 'react';
import styles from './Projetos.module.css';
import { Link } from 'react-router-dom';

function Projetos() {
  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>PROJETOS</h1>

      {/* Card Mãos que Cuidam - Atualizado */}
      <div className={styles.cardDestaque}>
        <h2 className={styles.tituloDestaque}>MÃOS QUE CUIDAM</h2>
        
        <div className={styles.galeria}>
          <img src="img1.jpeg" alt="Projeto 1" className={styles.galeriaImagem} />
          <img src="maos_que_cuidam.jpg" alt="Logo" className={styles.galeriaLogo} />
          <img src="img2.jpeg" alt="Projeto 2" className={styles.galeriaImagem} />
        </div>
        
        <div className={styles.botaoContainer}>
          <Link to="/projetos/maosquecuidam" className={styles.botao}>
            Saiba mais...
          </Link>
        </div>
      </div>

      {/* Card PROADI-SUS (mantido sem alterações) */}
      <div className={styles.cardProjeto}>
        <div className={styles.cardProjetoContent}>
          <div className={styles.textoContent}>
            <h2 className={styles.tituloProjeto}>PROADI-SUS</h2>
            <h3 className={styles.subtituloProjeto}>Saúde em nossas mãos</h3>
            
            <div className={styles.textoJustificado}>
              <p>O hospital é instrumental de garantir Avalia Superior do Brasil e a República. É a saúde de Núcleo Prado, paciente científico e dos domínios linguísticos.</p>
              <p>Apresentação de escolha horária de participação com os saldos da ambulância, promovendo o aumento de todos os valores e todas características das mãos, mostram-se as representações de modo fundamental para o desenvolvimento econômico que permite a responsabilidade social e social.</p>
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
      </div>
    </section>
  );
}

export default Projetos;