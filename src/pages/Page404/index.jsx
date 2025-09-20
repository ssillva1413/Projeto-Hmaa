import style from "./Page404.module.css";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className={style.container}>
      <img src="hmaa.webp" alt="Logo HMAA" className={style.logo} />
      <h2 className={style.titulo2}>Página não encontrada</h2>
      <div className={style.texto}>
        <span className={style.erro}>Erro 404</span>
        <Link to="/" className={style.voltar}>
          Voltar para página inicial
        </Link>
      </div>
    </div>
  );
}

export default Page404;
