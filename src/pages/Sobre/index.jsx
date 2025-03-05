import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from "../../components/Container"
import HeaderInfo from '../../components/HeaderInfo'
import style from "./Sobre.module.css"

function Sobre (){
    return (
        
        <>
        <HeaderInfo />


        <Header />
        <Container>
        <section className={style.sobreSection}>
          <h1>Sobre Nós</h1>
          <p>
           TEXTO
          </p>
        </section>

        <section className={style.videoSection}>
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

        <section className={style.mapSection}>
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
            

        </Container>
        <Footer />
        </>


    )

}
export default Sobre