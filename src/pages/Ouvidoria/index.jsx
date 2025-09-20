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
    console.log("Dados enviados:", form);
    // aqui futuramente conectamos com o back (igual ao modelo de autenticação)
  };

  return (
    <div className={styles.ouvidoriaContainer}>
      {/* Imagem */}
      <div className={styles.imageArea}>
        <img src="/atendente.jpg" alt="Atendente da Ouvidoria" />
      </div>

      {/* Formulário */}
      <div className={styles.formArea}>
        <h2>Ouvidoria Hospitalar</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Identificação */}
          <label htmlFor="nome">Identificação</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome (opcional)"
            value={form.nome}
            onChange={handleChange}
          />

          {/* Tipo de Manifestação */}
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

          {/* Setor */}
          <label htmlFor="setor">Setor</label>
          <select
            id="setor"
            name="setor"
            required
            value={form.setor}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="ambulatorio">Ambulatório</option>
            <option value="internacao">Internação</option>
            <option value="emergencia">Emergência</option>
            <option value="recepcao">Recepção</option>
            <option value="financeiro">Financeiro</option>
            <option value="outro">Outro</option>
          </select>

          {/* Descrição */}
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

          <button type="submit">Enviar Manifestação</button>
        </form>
      </div>
    </div>
  );
}

export default Ouvidoria;
