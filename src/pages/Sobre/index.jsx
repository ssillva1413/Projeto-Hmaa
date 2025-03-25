import style from "./Sobre.module.css"
import hmaa from "./images/hmaa.webp"

function Sobre (){
    return (
        
        <>
            
        <section className={style.sobre}>
          <div className={style.bio}>
            <img src={hmaa} alt="hmaa" className={style.hmaa} />
            <div className={style.textos}>
            <h1>Conheça a nossa história</h1>
            
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

        <section className={style.map}>
          <h2>Nossa Localização</h2>
          <iframe
            src="https://www.google.com.br/maps/embed?pb=!1m18!1m12!1m3!1d3171.170389060178!2d-39.29601592375827!3d-6.358431193568011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a31e44587d9ccb%3A0x10b516e6cf65d055!2sHospital%20e%20Maternidade%20Dr.%20Agenor%20Ara%C3%BAjo!5e0!3m2!1spt-BR!2sbr!4v1709583026083!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
            
        </>
    )

}
export default Sobre