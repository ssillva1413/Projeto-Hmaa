import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function Home () {
    return(
        <>
    <Header />
    <section className='container'>
      <div className='apresentacao'>
      <h1>
        O cuidado <br />
        Vem de casa.
      </h1>
      <p>
      Um ambiente seguro e atencioso <br />
      onde você se sente acolhido desde <br />  
      o primeiro momento.
      </p>
      <button className='btn btn-color'>
        Saiba mais
      </button>
      </div>
      <figure>
        <img className='img-home' src="/banner1.jpg" alt='imagem de banner'/>
      </figure>

    </section>
    <Footer />
    
    </>
    )
}
export default Home