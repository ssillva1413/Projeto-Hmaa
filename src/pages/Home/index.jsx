import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import React, { useState, useEffect } from "react"

const Home = () => {
  const videos = ["/Banner01.mp4", "/Banner02.mp4"]; 
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

  return (
    <>
    <section id="videoCarousel" className={styles.videoCarousel}>
    <div className={styles.carouselContainer}>
      <div className={styles.videoWrapper}>
      <video key={currentVideo} id="videoPlayer" autoPlay muted className={styles.video}>
        <source src={videos[currentVideo]} type="video/mp4" />
        Seu navegador não suporta vídeos em MP4.
      </video>
    </div>
    </div>
    </section>

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
    );
};

export default Home