import style from "./Page404.module.css"

function Page404(){
    return(
        <>   
            <h2 className={style.titulo2}>Pagina não encontrada</h2>
            <div className={style.texto}>
            <span className={style.erro}>Erro 404</span>
            <strong className={style.voltar}>Volte para pagina anterior</strong>
            </div>
        </>
    )
}

export default Page404