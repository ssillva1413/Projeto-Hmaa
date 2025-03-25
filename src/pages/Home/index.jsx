import React from "react"
import { Link } from "react-router-dom"
import styles from "./Home.module.css"

function Home () {
    return(
      <>
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
    </>
    )
}
export default Home