import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import noticias from "./Data/noticias";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const bannerRef = useRef(null);
  const promoCardRef = useRef(null);

  const banners = [
    "/carrossel 1.jpeg",
    "/carrossel 2.jpeg",
    "/carrossel 3.jpeg",
    "/carrossel 4.jpeg",
  ];

  // ✅ Troca automática dos banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentBanner((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  // ✅ ScrollReveal apenas no card do Cartão
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.promoCard}`, {
      origin: "bottom",
      distance: "90px",
      duration: 1800,
      delay: 400,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: true,
      opacity: 0,
    });
  }, []);

  const ultimasNoticias = noticias.slice(0, 4);

  return (
    <>
      {/* ===== Seção 1: Carrossel ===== */}
      <section className={styles.sectionBanner} ref={bannerRef}>
        <div className={styles.carousel}>
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentBanner ? styles.active : ""
              }`}
            >
              <img src={banner} alt={`Banner ${index + 1}`} />
            </div>
          ))}

          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextSlide}
          >
            &#10095;
          </button>

          <div className={styles.dots}>
            {banners.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentBanner ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentBanner(index)}
              ></span>
            ))}
          </div>
        </div>
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
