import style from "./Sobre.module.css";
import { useEffect, useRef } from "react";

function Sobre () {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(style.show);
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className={style.sobre} ref={sectionRef}>

        <div className={style.bio}>

          <div className={style.imagem}>
            <img src="AGENOR ARAUJO.jpg" alt="hmaa" />
          </div>

          <div className={style.textos}>
            <h2>Conheça a nossa história</h2>

            <p>
              O Hospital e Maternidade Dr. Agenor Araújo foi fundado em 18
              de abril de 1948 pela Associação Iguatuense de Assistência
              Social e de Proteção à Maternidade e à Infância. Localizado em
              Iguatu, Ceará, o hospital é uma entidade filantrópica
              reconhecida pelo Certificado de Entidade Beneficente de
              Assistência Social (CEBAS).
            </p>

            <p>
              Atualmente, o hospital é referência em cirurgias eletivas e
              internação clínica, oferecendo diversas especialidades médicas.
              Em novembro de 2022, inaugurou o Anexo Hospital Dia, ampliando
              sua capacidade de atendimento em até 70%. Além disso, lançou o
              Cartão Popular Casa de Saúde.
            </p>

            <p>
              Com uma equipe dedicada e múltiplas especialidades, o Hospital
              já transformou a vida de muitos pacientes.
            </p>

          </div>

        </div>

      </section>

      <section className={style.video}>
        <h2>Conheça Mais</h2>

        <iframe
          src="https://www.youtube.com/embed/QJbljzXCWuc?start=15"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </section>
    </>
  );
}

export default Sobre;