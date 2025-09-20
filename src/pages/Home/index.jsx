import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import React, { useState, useEffect } from "react";

import { videos, cards } from "./Data/homeData";
import noticias from "./Data/noticias";


const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("videoPlayer");

    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [currentVideo]);

  // Pegando apenas as 4 primeiras notícias para a Home
  const ultimasNoticias = noticias.slice(0, 4);

  return (
    <>
      {/* Seção 1: Banner e Cards */}
      <section className={styles.section1}>
        <div className={styles.videoCarousel}>
          <div className={styles.carouselContainer}>
            <div className={styles.videoWrapper}>
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
            </div>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          {cards.map((card) =>
            card.isExternal ? (
              <Link
                to={card.link}
                key={card.id}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
              </Link>
            ) : (
              <Link to={card.link} key={card.id} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3>{card.title}</h3>
              </Link>
            )
          )}
        </div>

        <div className={styles.messageSection}>
          {/* Texto */}
          <div className={styles.message}>
            <h2>O cuidado<br></br> vem de casa!</h2>
            <h3>
              Um ambiente seguro e atencioso<br></br> onde você se sente acolhido
              desde<br></br> o primeiro momento.
            </h3>
          </div>

          {/* Card de Promoção */}
          <Link to="/cartão" className={styles.promoCard}>
            <div className={styles.promoContent}>
              <h3>
                Saiba como <br></br>
                <strong>
                  o Cartão Popular<br></br> da Casa de Saúde
                </strong>
                <br></br> pode te ajudar<br></br> no <strong>HMAA</strong>
              </h3>

              <div className={styles.promoImage}>
                <img src="/saulo.jpeg" alt="Cartão Popular" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Seção 2: Últimas Notícias */}
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

      {/* Seção 3: Localização */}
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
