import React, { useState } from "react";
import styles from "./Ouvidoria.module.css";

function Ouvidoria() {
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    setor: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:5000/api/ouvidoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await resp.json();

      if (resp.ok) {
        alert(result.message || "Manifestação enviada com sucesso!");
       
        setForm({ nome: "", tipo: "", setor: "", descricao: "" });
      } else {
        alert("Erro: " + (result.error || "Falha ao enviar"));
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Não foi possível enviar. Verifique sua conexão com o servidor.");
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Fale Conosco</h1>

      <div className={styles.ouvidoriaContainer}>
        <div className={styles.imageArea}>
          <img src="ouvidoria.png" alt="Atendente da Ouvidoria" />
          <p className={styles.description}>
            Nossa central de atendimento é o canal aberto para ouvir você. Aqui você pode
            registrar sugestões, elogios, dúvidas ou reclamações de forma simples
            e rápida. Sua participação é essencial para que possamos melhorar
            continuamente os nossos serviços.
          </p>
        </div>

        <div className={styles.formArea}>
          <img
            src="Novopage.jpg"
            alt="Logo do Hospital"
            className={styles.logo}
          />

          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="nome">Identificação</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome (opcional)"
              value={form.nome}
              onChange={handleChange}
            />

            <label htmlFor="tipo">Tipo de Manifestação</label>
            <select
              id="tipo"
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

            <label htmlFor="setor">Setor</label>
            <select
              id="setor"
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

            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              rows="4"
              placeholder="Descreva sua manifestação"
              required
              value={form.descricao}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Ouvidoria;
