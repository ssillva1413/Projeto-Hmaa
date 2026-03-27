import styles from "./Convenios.module.css";

function Convenios() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.header}>
          <h1>RELATÓRIO DE TRANSPARÊNCIA</h1>
          <div className={styles.line}></div>
        </div>

        <h2>
          Igualdade Salarial de Mulheres e Homens – 1º Semestre 2026
        </h2>

        <p>
          Nosso hospital reafirma seu compromisso com a transparência e a igualdade
          por meio da divulgação do Relatório de Transparência e Igualdade Salarial
          entre Mulheres e Homens, conforme a legislação vigente.
        </p>

        <p>
          O relatório reflete nosso compromisso contínuo em identificar, monitorar
          e corrigir possíveis desigualdades, reforçando uma cultura organizacional
          pautada na diversidade, inclusão e justiça.
        </p>

        <p>
          Seguimos atentos e sempre procurando melhorar a promoção de um ambiente
          de trabalho justo, respeitoso e igualitário para todos os colaboradores.
        </p>

        {/* Destaque estilo filantropia */}
        <div className={styles.highlight}>
          Este relatório reforça o compromisso do HMAA com a equidade, promovendo
          transparência, responsabilidade social e valorização das pessoas.
        </div>

        {/* Botão */}
        <a
          href="/relatorio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Baixar Relatório
        </a>

       

      </div>
    </div>
  );
}

export default Convenios;