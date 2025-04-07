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

  <div className="flex flex-col lg:flex-row gap-8 px-8 mt-10">
  {/* Notícias */}
  <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
    {noticias.map((noticia) => (
      <NewsCard
        key={noticia.id}
        imagem={noticia.imagem}
        titulo={noticia.titulo}
        data={noticia.data}
        texto={noticia.texto}
        link={noticia.link}
      />
    ))}
  </div>

  {/* Texto institucional ao lado */}
  <div className="w-full lg:w-1/4">
    <h2 className="text-2xl font-bold text-red-700 mb-2">Nossa História</h2>
    <div className="h-1 w-16 bg-red-700 mb-4"></div>
    <p className="font-semibold mb-2">Valorizamos a história que nos trouxe até aqui!</p>
    <p className="text-sm text-gray-700 mb-2">
      A SC Medical nasceu em junho de 2010 para atuar na área médico-hospitalar como representante...
    </p>
    <p className="text-sm text-gray-700 mb-2">
      Com 14 anos de atuação no setor, a empresa deu um importante passo em 2023 ao lançar...
    </p>
    <p className="text-sm text-gray-700 mb-2">
      Desde 2019, é representante exclusiva da marca Vinno...
    </p>
    <p className="text-sm text-gray-700">
      Também comercializa eletrocardiógrafos, monitores, oxímetros e outros equipamentos...
    </p>
  </div>
</div>
}

export default Noticias;
