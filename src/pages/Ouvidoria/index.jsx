import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Ouvidoria.module.css";

function Ouvidoria() {

  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    setor: "",
    descricao: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const recaptchaRef = useRef(null);
  const sucessoRef = useRef(null);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!captchaToken) {
      alert("Por favor, confirme que você não é um robô.");
      return;
    }

    try {

      const resp = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ouvidoria`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, captchaToken }),
        }
      );

      const result = await resp.json();

      if (resp.ok) {

        setEnviado(true);

        setForm({
          nome: "",
          tipo: "",
          setor: "",
          descricao: "",
        });

        recaptchaRef.current.reset();
        setCaptchaToken(null);
        
        setTimeout(() => {
          window.location.reload();
        }, 10000);

      } else {

        alert("Erro: " + (result.error || "Falha ao enviar"));

      }

    } catch (error) {

      console.error("Erro:", error);
      alert("Erro ao enviar formulário.");

    }

  };

  useEffect(() => {
    if (enviado && sucessoRef.current) {
      sucessoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [enviado]);

  return (

    <div className={styles.container}>

      <div className={styles.header}>
        <h1>FALE CONOSCO</h1>
        <div className={styles.linha}></div>
      </div>

      <div className={styles.wrapper}>

        <div className={styles.left}>

          <p>
            Nossa central de atendimento é o canal aberto para ouvir você.
          </p>

          <p>
            Aqui você pode registrar sugestões, elogios, dúvidas ou
            reclamações de forma simples e rápida.
          </p>

          <p>
            Sua participação é essencial para que possamos melhorar
            continuamente os nossos serviços.
          </p>

        </div>

        <div className={styles.right}>

          {enviado && (
            <div ref={sucessoRef} className={styles.sucesso}>
              <strong>✔ Manifestação enviada com sucesso</strong>
              <span>Agradecemos sua participação. Sua opinião é muito importante para nós.</span>
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.inputGroup}>

              <label>IDENTIFICAÇÃO</label>

              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome (opcional)"
                value={form.nome}
                onChange={handleChange}
              />

            </div>

            <div className={styles.inputGroup}>

              <label>TIPO DE MANIFESTAÇÃO *</label>

              <select
                name="tipo"
                required
                value={form.tipo}
                onChange={handleChange}
              >

                <option value="">Selecione...</option>
                <option value="reclamacao">Reclamação</option>
                <option value="elogio">Elogio</option>
                <option value="sugestao">Sugestão</option>
                <option value="denuncia">Denúncia</option>
                <option value="informacao">Informação</option>

              </select>

            </div>

            <div className={styles.inputGroup}>

              <label>SETOR *</label>

              <select
                name="setor"
                required
                value={form.setor}
                onChange={handleChange}
              >

                <option value="">Selecione...</option>
                <option value="ambulatorio sus">Ambulatório SUS</option>
                <option value="ambulatorio part">Ambulatório Particular</option>
                <option value="internacao">Internação</option>
                <option value="comercial">Comercial</option>
                <option value="financeiro">Financeiro</option>
                <option value="outro">Outro</option>

              </select>

            </div>

            <div className={styles.inputGroup}>

              <label>DESCRIÇÃO *</label>

              <textarea
                name="descricao"
                rows="4"
                placeholder="Descreva sua manifestação"
                required
                value={form.descricao}
                onChange={handleChange}
              />

            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>

              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                ref={recaptchaRef}
              />

            </div>

            <button className={styles.botao}>
              Enviar
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Ouvidoria;