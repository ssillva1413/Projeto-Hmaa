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
    
  ];

  return (
    <>
      {/* ==== BANNER DA CLÍNICA ==== */}
      <div className={styles.clinicaBanner}>
        <img src="estado.jpg" alt="Banner da clínica" />

        <div className={styles.bannerOverlay}>
          <h1>Clínica Casa de Saúde</h1>
          <p>
            A Clínica Casa de Saúde é um anexo do Hospital Maternidade Agenor Araújo (HMAA), 
            que oferece atendimento particular com qualidade hospitalar e valores acessíveis. 
            Com ambiente leve e acolhedor, contamos com profissionais experientes em diversas 
            especialidades, além de exames laboratoriais e suporte clínico.
          </p>
        </div>
      </div>

      {/* ==== IMAGEM PRINCIPAL ==== */}
      <div className={styles.clinicaImagemDestaque}>
        <img src={imagemSelecionada} alt="Imagem principal da clínica" />
      </div>

      {/* ==== MINIATURAS ==== */}
      <div className={styles.thumbsContainer}>
        {imagens.map((img) => (
          <div
            key={img.id}
            className={styles.thumb}
            onClick={() => setImagemSelecionada(img.src)}
          >
            <img src={img.src} alt={img.nome} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Cartao;
