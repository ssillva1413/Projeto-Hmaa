import React, { useState } from "react";
import styles from "./Cartao.module.css";

function Cartao() {
  const [imagemSelecionada, setImagemSelecionada] = useState("principal.webp");
  const imagens = [
    { id: 1, src: "principal.webp", nome: "Miniatura 1" },
    { id: 2, src: "recepção.webp", nome: "Miniatura 2" },
    { id: 3, src: "bg.webp", nome: "Miniatura 3" },
    { id: 4, src: "consultorio2.webp", nome: "Miniatura 4" },
    { id: 5, src: "consultorio3.webp", nome: "Miniatura 5" },
    { id: 6, src: "coleta.webp", nome: "Miniatura 6" },
    { id: 7, src: "cli.webp", nome: "Miniatura 7" },
    { id: 8, src: "entrada.webp", nome: "Miniatura 8" },
  ];

  return (
    <>
      <div className={styles.clinicaBanner}>
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

      <div className={styles.clinicaImagemDestaque}>
        <img
          src={imagemSelecionada}
          alt="Imagem principal da clínica"
          loading="eager"
          decoding="async"
          width="1100"
          height="600"
        />
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
            <img
              src={img.src}
              alt={img.nome}
              loading="lazy"
              decoding="async"
              width="200"
              height="80"
            />
          </div>
        ))}
      </div>

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
          <img
            src="familia.jpeg"
            alt="Família Cartão Casa de Saúde"
            loading="lazy"
            decoding="async"
            width="900"
            height="600"
          />
        </div>
      </section>

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
      </section>

      <section className={styles.cardFinal}>
        <div className={styles.cardVerdeBottom}>
          <div className={styles.cardLogo}>
            <img
              src="logo_cartao.jpeg"
              alt="Logo Clínica"
              loading="lazy"
              decoding="async"
              width="120"
              height="120"
            />
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
            <img
              src="qrcode.png"
              alt="QR Code"
              loading="lazy"
              decoding="async"
              width="120"
              height="120"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cartao;
