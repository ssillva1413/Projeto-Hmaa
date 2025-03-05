import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import style from "./Page404.module.css"


function Page404(){
    return(
        <>
        <Header />
        <Container>
            <h2 className={style.titulo2}>Pagina não encontrada</h2>
            <div className={style.texto}>
            <span className={style.erro}>Erro 404</span>
            <strong className={style.voltar}>Volte para pagina anterior</strong>
            </div>
        </Container>
        <Footer />
        
        
        
        
        </>
    )
}

export default Page404