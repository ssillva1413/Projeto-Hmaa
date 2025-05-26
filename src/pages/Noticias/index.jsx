import React from "react";
import styles from "./Noticias.module.css";

function Noticias() {
  const noticias = [
    {
      imagem: "estado.jpg",
      titulo: "Governo do Ceará reforça compromisso com realização de cirurgias eletivas e tratamento do câncer na Região Centro-Sul",
      data: "28 DE JULHO DE 2023 - 21:16",
      texto: "Em Iguatu, no Centro-Sul cearense, o Hospital e Maternidade Agenor Araújo (HMAA) está credenciado desde maio deste ano para atender pacientes dentro do Plano Estadual de Redução das Filas de Cirurgias Eletivas, Exames Complementares e Consultas Especializadas. Até o momento, 110 procedimentos foram realizados na unidade. Na tarde desta terça-feira (25), o governador Elmano de Freitas visitou o Hospital, acompanhado de autoridades, e reforçou a parceria para ampliar acesso ao tratamento do câncer.",
      tags: ["Ficouro-Sul", "Cirurgias Eletivas", "Compromisso", "Governo Do Estado", "Tratamento De Câncer"],
      autores: ["Lorista Felido - Ascron Casa Civil - Foto", "Thiago Gaspar - Casa Civil - Foto"]
    },
    {
      imagem: "/estado.jpg",
      titulo: "Camas Hospitalares com Balança: onde e quando usar?",
      data: "24/10/2024",
      texto: "Diferentes propósitos para as camas, um único objetivo na qualidade do cuidado ao paciente...",
      link: "#"
    },
    {
      imagem: "/images/revista-vinkgo.jpg",
      titulo: "SC Medical é destaque na Revista Vinkgo",
      data: "02/06/2022",
      texto: "A SC Medical foi destaque na última edição da Revista Vinkgo pelos seus avanços tecnológicos...",
      link: "#"
    },
    {
      imagem: "/images/hospitalar.jpg",
      titulo: "SC Medical na Hospitalar 2022",
      data: "03/05/2022",
      texto: "A SC Medical estará presente na 27ª edição da Hospitalar, maior feira da área na América Latina...",
      link: "#"
    },
  ];

  const [noticiaPrincipal, ...outrasNoticias] = noticias;

  return (
    <div className={styles.container}>
      {/* Título da página */}
      <h1 className={styles.tituloPagina}>NOTÍCIAS</h1>
      
      {/* Notícia principal */}
      <div className={styles.noticiaPrincipal}>
        <div className={styles.cabecalhoPrincipal}>
          <h2 className={styles.tituloPrincipal}>{noticiaPrincipal.titulo}</h2>
          <div className={styles.autores}>
            {noticiaPrincipal.autores.map((autor, index) => (
              <p key={index} className={styles.autor}>{autor}</p>
            ))}
          </div>
          <p className={styles.dataPrincipal}>{noticiaPrincipal.data}</p>
          <div className={styles.tags}>
            {noticiaPrincipal.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        
        <div className={styles.conteudoPrincipal}>
          <img 
            src={noticiaPrincipal.imagem} 
            alt={noticiaPrincipal.titulo}
            className={styles.imagemPrincipal}
          />
          <div className={styles.textoContainer}>
            <p className={styles.textoPrincipal}>{noticiaPrincipal.texto}</p>
          </div>
        </div>
      </div>

      {/* Seção de últimas notícias em cards com imagens */}
      <div className={styles.outrasNoticias}>
        <h2 className={styles.tituloSecao}>ÚLTIMAS NOTÍCIAS</h2>
        
        <div className={styles.gridCards}>
          {outrasNoticias.map((item, index) => (
            <div key={index} className={styles.cardNoticia}>
              <img 
                src={item.imagem} 
                alt={item.titulo}
                className={styles.cardImagem}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitulo}>{item.titulo}</h3>
                <p className={styles.cardData}>{item.data}</p>
                <p className={styles.cardTexto}>{item.texto}</p>
                <a href={item.link} className={styles.leiaMais}>Leia mais →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Noticias;