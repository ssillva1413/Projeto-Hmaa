import React, { useEffect, useRef } from "react";
import styles from "./Projetos.module.css";

function Projetos() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.projetos}>
      {/* Sessão 1 — Mãos que Cuidam (IMAGEM à ESQUERDA, image entra da esquerda) */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`${styles.section} ${styles.imageLeft}`}
      >
        <div className={`${styles.imageWrapper} ${styles.fromLeft}`}>
          <div className={styles.imageFrame}>
            {/* troque para sua imagem real */}
            <img src="proadi.jpg" alt="Mãos que Cuidam" />
          </div>
        </div>

        <div className={`${styles.textWrapper} ${styles.fromRightDelay}`}>
          <h2>Mãos que Cuidam</h2>
          <p>
            Projeto voltado para o cuidado humanizado e apoio social, fortalecendo
            o vínculo entre saúde e comunidade. Aqui você descreve missão, metas e impacto.
          </p>

          {/* botão abaixo do texto (mantive max-width igual ao frame da imagem) */}
          <button className={styles.ctaButton}>Saiba mais</button>
        </div>
      </section>

      {/* Sessão 2 — PROADI-SUS (TEXTO à ESQUERDA, imagem à DIREITA) */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`${styles.section} ${styles.imageRight}`}
      >
        <div className={`${styles.textWrapper} ${styles.fromLeftDelay}`}>
          <h2>PROADI-SUS</h2>
          <p>
            Iniciativa de desenvolvimento e inovação em saúde, apoiando a rede pública
            com capacitação, tecnologia e conhecimento. Explique objetivos e alcance.
          </p>

          <button className={styles.ctaButton}>Saiba mais</button>
        </div>

        <div className={`${styles.imageWrapper} ${styles.fromRight}`}>
          <div className={styles.imageFrame}>
            {/* troque para sua imagem real */}
            <img src="proadi.jpg" alt="PROADI SUS" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projetos;
