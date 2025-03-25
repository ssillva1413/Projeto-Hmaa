//import CardNoticia from "../../components/CardNoticia";        
import styles from "./Noticias.module.css";

function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: "Título da Notícia 1",
      data: "25/03/2025",
      descricao: "Pequena descrição sobre a notícia para chamar atenção do leitor...",
    },
    {
      id: 2,
      titulo: "Título da Notícia 2",
      data: "24/03/2025",
      descricao: "Outro resumo da notícia para despertar interesse no usuário...",
    },
    {
      id: 3,
      titulo: "Título da Notícia 3",
      data: "23/03/2025",
      descricao: "Mais uma pequena introdução sobre a notícia destacada...",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimas Notícias</h2>
      <div className={styles.grid}>
        {noticias.map((noticia) => (
          <CardNoticia
            key={noticia.id}
            titulo={noticia.titulo}
            data={noticia.data}
            descricao={noticia.descricao}
          />
        ))}
      </div>
    </div>
  );
}

export default Noticias;
