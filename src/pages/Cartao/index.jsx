import React, { useState } from "react";
import styles from "./Cartao.module.css";

function Cartao() {
  const [imagemSelecionada, setImagemSelecionada] = useState("principal.JPEG");

  const imagens = [
    { id: 1, src: "principal.JPEG", nome: "Miniatura 1" },
    { id: 2, src: "recepção.JPEG", nome: "Miniatura 2" },
    { id: 3, src: "bg.JPEG", nome: "Miniatura 3" },
    { id: 4, src: "consultorio2.JPEG", nome: "Miniatura 4" },
    { id: 5, src: "consultorio3.JPEG", nome: "Miniatura 5" },
    { id: 6, src: "coleta.JPEG", nome: "Miniatura 6" },
    { id: 7, src: "cli.JPEG", nome: "Miniatura 7" },
    { id: 8, src: "entrada.JPEG", nome: "Miniatura 8" },
  ];

  return (
    <>
      {/* ===================== SESSÃO 1 ===================== */}
      <div
        className={styles.clinicaBanner}
        style={{ backgroundImage: `url("estado.jpg")` }}
      >
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <h1>Clínica Casa de Saúde</h1>
            <p>
              A Clínica Casa de Saúde é um anexo do Hospital Maternidade Agenor
              Araújo (HMAA), que oferece atendimento particular com qualidade
              hospitalar e valores acessíveis. Com ambiente leve e acolhedor,
              contamos com profissionais experientes em diversas especialidades,
              além de exames laboratoriais e suporte clínico.
            </p>
          </div>
        </div>
      </div>

      {/* ========== Imagem principal / Miniaturas ========= */}
      <div className={styles.clinicaImagemDestaque}>
        <img src={imagemSelecionada} alt="Imagem principal da clínica" />
      </div>

      <div className={styles.thumbsContainer}>
        {imagens.map((img) => (
          <div
            key={img.id}
            className={styles.thumb}
            onClick={() => setImagemSelecionada(img.src)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setImagemSelecionada(img.src);
              }
            }}
          >
            <img src={img.src} alt={img.nome} />
          </div>
        ))}
      </div>

      {/* ===================== SESSÃO 2 ===================== */}
      <section className={styles.cartaoSection}>
        <h2 className={styles.cartaoTitulo}>Cuide da sua saúde com economia!</h2>

        <div className={styles.cardVerdeTop}>
          <p>
            <strong>Amor também se demonstra com cuidado!</strong>
            <br />
            Garanta saúde e bem-estar para você e sua família com o{" "}
            <strong>Cartão Popular Casa de Saúde</strong>.
          </p>
        </div>

        <div className={styles.cardVermelho}>
          <span>1 Titular</span>
          <strong style={{ marginTop: 6 }}>+ 4 dependentes</strong>
        </div>

        <div className={styles.cartaoImagem}>
          <img src="familia.jpeg" alt="Família Cartão Casa de Saúde" />
        </div>
      </section>

      {/* ===================== SESSÃO 3 ===================== */}
      <section className={styles.sessao3}>
        <h2 className={styles.sessao3Titulo}>
          Mais descontos, mais saúde ao seu alcance!
        </h2>

        <div className={styles.sessao3Cards}>
          <div className={styles.cardLeft}>
            <h3 className={styles.precoLeft}>A partir de R$ 19,90</h3>
            <ul>
              <li>✔ Descontos em consultas com especialistas</li>
              <li>✔ Descontos em exames</li>
              <li>✔ Clube de vantagens</li>
              <li>✔ Descontos em pequenas cirurgias</li>
            </ul>
          </div>

          <div className={styles.cardRight}>
            <h3 className={styles.precoRight}>R$ 49,90</h3>
            <ul>
              <li>✔ Descontos em consultas com especialistas</li>
              <li>✔ Maior desconto em exames</li>
              <li>✔ Clube de vantagens</li>
              <li>✔ Clínico geral gratuito</li>
              <li>✔ Descontos em cirurgias</li>
              <li>✔ Descontos em partos</li>
              <li>✔ Descontos em internações dia</li>
              <li>✔ Descontos em atendimentos</li>
            </ul>
          </div>
        </div>

        {/* CARDS ODONTO E 26 ESPECIALIDADES */}
        <div className={styles.sessaoOdontoBloco}>
          <div className={styles.cardOdonto}>
            <p>✔ Agora temos atendimento odontológico disponível todos os dias!</p>
          </div>

          <div className={styles.cardEspecialidades}>+ de 26 especialidades</div>
        </div>
      </section>

      {/* ===================== CARD FINAL (MOVIDO) ===================== */}
      <section className={styles.cardFinal}>
        <div className={styles.cardVerdeBottom}>
          <div className={styles.cardLogo}>
            <img src="logo_cartao.jpeg" alt="Logo Clínica" />
          </div>

          <div className={styles.cardContatos}>
            <p style={{ margin: 0, fontSize: 17 }}>Maiores informações:</p>
            <p className={styles.whatsapp} style={{ margin: "6px 0" }}>
              (88) 9 9298.7818
            </p>
            
            <p style={{ margin: 0, fontSize: 18 }}>Siga nosso Instagram:</p>
            <a
              href="https://www.instagram.com/clinicacasadesaude/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              @clinicacasadesaude
            </a>

          </div>

           <div className={styles.cardQrCode}>
          <span className={styles.qrTitulo}>Saiba mais</span>
          <img src="qrcode.png" alt="QR Code" />
          </div>

        </div>
      </section>
    </>
  );
}

export default Cartao;
