import React from "react";
import NewsCard from "../../components/Card";
import styles from "./Noticias.module.css";

function Noticias() {
  const noticias = [
    {
      imagem: "clinica.jpg",
      titulo: "Governo do Ceará reforça compromisso com realização de cirurgias eletivas e tratamento do câncer na Região Centro-Sul",
      data: "25/07/2023",
      texto: "Governo do Ceará reforça compromisso com realização de cirurgias eletivas e tratamento do câncer na Região Centro-Sul",
    },
    {
      imagem: "/images/2.png",
      titulo: "Camas Hospitalares com Balança: onde e quando usar?",
      data: "24/10/2024",
      texto: "Diferentes propósitos para as camas, um único objetivo na...",
    },
    {
      imagem: "/images/3.png",
      titulo: "SC Medical é destaque na Revista Vinkgo",
      data: "02/06/2022",
      texto: "A SC Medical foi destaque na última edição da Revista Vinkgo...",
    },
    {
      imagem: "/images/4.png",
      titulo: "SC Medical na Hospitalar 2022",
      data: "03/05/2022",
      texto: "A SC Medical estará presente na 27ª edição da Hospitalar...",
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Últimas Notícias</h1>
      <div className={styles.grid}>
        {noticias.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Noticias;
