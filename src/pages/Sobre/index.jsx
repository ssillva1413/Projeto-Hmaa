import style from "./Sobre.module.css"

function Sobre (){
    return (
        
        <>          
        <section className={style.sobre}>
          <div className={style.bio}>
            <img src="Novopage.jpg" alt="hmaa" className={style.hmaa} />
            <div className={style.textos}>
            <h2>Conheça a nossa história</h2>
            
          <p>
            O Hospital e Maternidade Dr. Agenor Araújo foi fundado em 18 <br />
          de abril de 1948 pela Associação Iguatuense de Assistência <br />
          Social e de Proteção à Maternidade e à Infância. Localizado em <br />
          Iguatu, Ceará, o hospital é uma entidade filantrópica <br />
          reconhecida pelo Certificado de Entidade Beneficente de <br />
          Assistência Social (CEBAS).
          </p>
          <p>
            Atualmente, o hospital é referência em cirurgias eletivas e <br />
          internação clínica, oferecendo diversas especialidades <br />
          médicas. Em novembro de 2022, inaugurou o Anexo Hospital <br />
          Dia, ampliando sua capacidade de atendimento em até 70%. <br />
          Além disso, lançou o Cartão Popular Casa de Saúde, com <br />
          mensalidades acessíveis, proporcionando descontos em <br />
          consultas, exames e cirurgias. <br />
          </p>
          <p>
            Com uma equipe dedicada e múltiplas especialidades, o Hospital <br />
          e Maternidade Dr. Agenor Araújo já transformou a vida de muitos <br />
          pacientes através de cirurgias e atendimentos de qualidade. <br />
          </p>
          </div>
          </div>
        </section>

        <section className={style.video}>
          <h2>Conheça Mais</h2>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/QJbljzXCWuc?start=15"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>          
        </>
    )
}
export default Sobre