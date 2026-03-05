import styles from "./Filantropia.module.css";

function Filantropia() {
  return (
    <div className={styles.container}>

      <div className={styles.titleRow}>
        <h1 className={styles.title}>FILANTROPIA</h1>
        <div className={styles.line}></div>
      </div>

      <div className={styles.textContent}>
        <p>
          Filantropia é o ato de promover o bem do outro de forma voluntária e
          solidária. A palavra vem do grego <strong>philos</strong> (amor) e{" "}
          <strong>anthropos</strong> (ser humano) — ou seja, significa
          literalmente “amor à humanidade”.
        </p>

        <p>
          Na prática, filantropia é quando pessoas ou instituições destinam
          recursos, tempo ou serviços para ajudar a sociedade, especialmente
          quem mais precisa, sem ter como objetivo o lucro.
        </p>

        <p>
          No contexto da saúde, ser filantrópico é oferecer atendimento com
          responsabilidade social, reinvestindo recursos para ampliar o acesso,
          melhorar a estrutura e garantir cuidado digno à comunidade. É colocar
          o propósito de servir acima de interesses financeiros.
        </p>

        <div className={styles.highlight}>
          <p>
            O HMAA busca ir além do atendimento hospitalar. Busca ser presença,
            acolhimento e esperança para cada pessoa que cruza suas portas.
          </p>

          <p>
            Busca oferecer saúde com responsabilidade social, garantindo acesso
            digno e humanizado, especialmente para quem mais precisa.
          </p>

          <p>
            Busca crescer sem perder a essência: cuidar com empatia, respeito e
            compromisso com a vida.
          </p>

          <p className={styles.final}>
            Porque ser filantrópico é isso: servir com propósito e colocar as
            pessoas sempre em primeiro lugar.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Filantropia;