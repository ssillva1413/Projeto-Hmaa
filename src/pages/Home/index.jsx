import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"
import HeaderInfo from "../../components/HeaderInfo"
import Container from "../../components/Container"
import styles from "./Home.module.css"

  
function Home () {
    return(
        <>
       
        <HeaderInfo />
      
    <Header />
    <Container>
    <section className={styles.home}>
      <div className={styles.apresentacao}>
      <h1>
        O cuidado <br />
        Vem de casa.
      </h1>
      <p>
      Um ambiente seguro e atencioso <br />
      onde você se sente acolhido desde <br />  
      o primeiro momento.
      </p>
      <Link to='/sobre' className={`${styles.btn} ${styles.btn_color}`}>
        Saiba mais
      </Link>
      </div>
      <figure>
        <img className={styles.img_home} src="/banner1.jpg" alt='imagem de banner'/>
      </figure>

    </section>
    
    </Container>
    <Footer />
    
    </>
    )
}
export default Home