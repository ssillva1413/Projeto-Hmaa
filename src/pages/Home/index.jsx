import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import { videos } from "./Data/homeData";
import noticias from "./Data/noticias";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const bannerRef = useRef(null);
  const promoCardRef = useRef(null); // ✅ referência ao card do cartão

  useEffect(() => {
    const videoElement = document.getElementById("videoPlayer");
    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    if (videoElement) videoElement.addEventListener("ended", handleEnded);
    return () => {
      if (videoElement) videoElement.removeEventListener("ended", handleEnded);
    };
  }, [currentVideo]);

  // ✅ Efeito ScrollReveal apenas no card do Cartão
  useEffect(() => {
  ScrollReveal().reveal(`.${styles.promoCard}`, {
    origin: "bottom",
    distance: "90px",   // movimento mais longo
    duration: 1800,     // animação mais lenta
    delay: 400,         // entra com pequeno atraso
    easing: "cubic-bezier(0.5, 0, 0, 1)", // efeito suave e elegante
    reset: false,       // não reaparece ao rolar pra cima
    opacity: 0,
  });
}, []);


  const ultimasNoticias = noticias.slice(0, 4);

  return (
    <>
      {/* ===== Seção 1: Banner ===== */}
      <section className={styles.sectionBanner} ref={bannerRef}>
        <video
          key={currentVideo}
          id="videoPlayer"
          autoPlay
          muted
          className={styles.video}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          Seu navegador não suporta vídeos em MP4.
        </video>
      </section>

      {/* ===== Seção 2: Mensagem + Cartão ===== */}
      <section className={styles.sectionMessage}>
        <div className={styles.messageSection}>
          <div className={styles.message}>
            <h2>
              O cuidado
              <br />
              vem de casa!
            </h2>
            <h3>
              Um ambiente seguro e atencioso
              <br />
              onde você se sente acolhido desde
              <br />
              o primeiro momento.
            </h3>
          </div>

          {/* ✅ ScrollReveal aplicado somente neste card */}
          <Link to="/cartão" className={styles.promoCard} ref={promoCardRef}>
            <div className={styles.promoContent}>
              <h3>
                Saiba como <br />
                <strong>
                  o Cartão Popular
                  <br /> da Casa de Saúde
                </strong>
                <br /> pode te ajudar
                <br /> no <strong>HMAA</strong>
              </h3>

              <div className={styles.promoImage}>
                <img src="/saulo.jpeg" alt="Cartão Popular" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== Seção 3: Últimas Notícias ===== */}
      <section className={styles.sectionNews}>
        <div className={styles.newsHeader}>
          <div className={styles.newsDivider}>
            <h2>ÚLTIMAS NOTÍCIAS</h2>
          </div>
        </div>

        <div className={styles.newsContainer}>
          <div className={styles.newsGrid}>
            {ultimasNoticias.map((noticia) => (
              <article key={noticia.id} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <img src={noticia.imagem} alt={noticia.titulo} />
                </div>
                <div className={styles.newsContent}>
                  <h3>{noticia.titulo}</h3>
                  <div className={styles.newsDate}>{noticia.data}</div>
                  <p>{noticia.resumo}</p>
                  <Link to={noticia.link} className={styles.newsLink}>
                    <span className={styles.newsLinkText}>Leia mais</span>
                    <span className={styles.newsLinkArrow}> →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Seção 4: Localização ===== */}
      <section className={styles.section2}>
        <div className={styles.locationHeader}>
          <div className={styles.sectionDivider}>
            <h2>LOCALIZAÇÃO</h2>
          </div>
        </div>

        <div className={styles.address}>
          <p className={styles.street}>Rua Vicente Bezerra da Costa, 338</p>
          <p className={styles.city}>São Sebastião, Iguatu - CE</p>
        </div>

        <div className={styles.locationContent}>
          <div className={styles.hospitalImage}>
            <img
              src="2020-05-12.webp"
              alt="Hospital e Maternidade Dr. Agenor Araújo"
            />
            <div className={styles.mapOverlay}>
              <iframe
                src="https://www.google.com.br/maps/embed?pb=!1m18!1m12!1m3!1d3171.170389060178!2d-39.29601592375827!3d-6.358431193568011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a31e44587d9ccb%3A0x10b516e6cf65d055!2sHospital%20e%20Maternidade%20Dr.%20Agenor%20Ara%C3%BAjo!5e0!3m2!1spt-BR!2sbr!4v1709583026083!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
