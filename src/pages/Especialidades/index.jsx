import React from "react";
import styles from "./Especialidades.module.css";

function Especialidades() {
  return (
    <section className={styles.background}>
      <div className={styles.fundoTitulo}>
        <h2 className={styles.tituloCinza}>Conheça nossas</h2>
        <h1 className={styles.tituloVerde}>ESPECIALIDADES</h1>
      </div>

      <div className={styles.card}>
        <img
          src="obstetricia.jpeg"
          alt="Obstetrícia"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Obstetrícia</h2>
          <p>
            No Hospital Maternidade Agenor Araújo (HMAA), a obstetrícia cirúrgica é conduzida com excelência,
            especialmente em partos cesáreos, oferecendo segurança para mãe e bebê com estrutura completa,
            equipe especializada e humanização em cada etapa do nascimento.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <img
          src="ortopedia.jpeg"
          alt="Ortopedia"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Ortopedia/Traumatologia</h2>
          <p>
            No Hospital Maternidade Agenor Araújo (HMAA), realizamos cirurgias ortopédicas
            e traumatológicas para correção de fraturas, lesões ligamentares e articulares, 
            com foco na recuperação funcional e no retorno à qualidade de vida dos pacientes.

          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="ginecologia.jpeg"
          alt="Ginecologia"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Ginecologia</h2>
          <p>
            O HMAA realiza cirurgias ginecológicas com foco na saúde e qualidade de vida da mulher, 
            incluindo procedimentos como histerectomias, laparoscopias e correções de patologias uterinas,
            sempre com tecnologia e cuidado integral.
           
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="cirurgia_geral.jpeg"
          alt="Cirurgia Geral"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Cirurgia Geral</h2>
          <p>
            A equipe de cirurgia geral do HMAA atua em procedimentos abdominais, hérnias,
             vesícula, entre outros, com estrutura moderna, anestesia segura e acompanhamento 
             especializado antes, durante e após a cirurgia.

            
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="mastologia.jpeg"
          alt="Mastologia"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Mastologia</h2>
          <p>
            O HMAA realiza cirurgias mastológicas voltadas ao tratamento de doenças das mamas,
            como nódulos e câncer de mama, com abordagem sensível, diagnósticos precisos e suporte em todas as fases do cuidado.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="proctologia.jpeg"
          alt="Proctologia"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Proctologia</h2>
          <p>
            Na área de proctologia, o HMAA realiza cirurgias para tratar hemorroidas,
            fissuras, fístulas e outras doenças do reto e ânus, com sigilo, conforto
            e técnicas minimamente invasivas sempre que possível.

          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img
          src="otorrinolaringologia.jpeg"
          alt="Otorrinolaringologia"
          className={styles.imagem}
        />
        <div className={styles.texto}>
          <h2 className={styles.tituloVerde}>Otorrinolaringologia</h2>
          <p>
           O serviço de otorrinolaringologia do HMAA realiza cirurgias como retirada das amígdalas,
           adenoides, correções do septo nasal e procedimentos auditivos, priorizando o alívio
           dos sintomas e o bem-estar dos pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Especialidades;
