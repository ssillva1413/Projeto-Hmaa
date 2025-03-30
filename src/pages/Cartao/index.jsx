
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"
import HeaderInfo from "../../components/HeaderInfo"
import Card from "../../components/Card"
import styles from './Cartao.module.css'
import { useEffect, useState } from "react"
import React from "react";


const cartao = [
    {
      id: 1,
      titulo: "Segunda-Feira 31/03",
      profissionais: [
        {
            nome: "Dr. Carlos Sobreira",
            especialidade: "Clínico Geral",
            imagem: "carlos.jpg", // Exemplo de caminho de imagem
          },
          {
            nome: "Dr. João",
            especialidade: "Clínico Geral",
            imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
          },
           {
            nome: "Dr. João",
            especialidade: "Clínico Geral",
            imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
          },
          {
            nome: "Dr. João",
            especialidade: "Clínico Geral",
            imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
          },
      ],
    },
    {
      id: 2,
      titulo: "Terça-Feira 01/04",
      profissionais: [
        {
            nome: "Dr. João",
            especialidade: "Clínico Geral",
            imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
          },
      ],
    },
    {
      id: 3,
      titulo: "Quarta-Feira 02/04",
      profissionais: [
        {
            nome: "Dr. João",
            especialidade: "Clínico Geral",
            imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
          },
      ],
    },
    {
        id: 4,
        titulo: "Quinta-Feira 03/04",
        profissionais: [
            {
                nome: "Dr. João",
                especialidade: "Clínico Geral",
                imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
              },
        ],
    },
    {
        id: 5,
        titulo: "Sexta-Feira 04/04",
        profissionais: [
            {
                nome: "Dr. João",
                especialidade: "Clínico Geral",
                imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
              },
          ],
    },
    {
        id: 6,
        titulo: "Sabado 05/04",
        profissionais: [
            {
                nome: "Dr. João",
                especialidade: "Clínico Geral",
                imagem: "/imagens/clinico.jpg", // Exemplo de caminho de imagem
              },
          ],
       
    },
  ];
  
  function Cartao() {
    return (
      <section>
        <div className={styles.agenda}>
          <h2 className={styles.titulo}>Agenda Semanal</h2>
          <div className={styles.lista}>
            {cartao.map((esp) => (
              <div key={esp.id} className={styles.card}>
                <div className={styles.cardTitulo}>
                  <h3>{esp.titulo}</h3>
                </div>
                <div className={styles.profissionaisLista}>
                  {esp.profissionais.map((prof) => (
                    <div key={prof.nome} className={styles.profissionalItem}>
                      <div className={styles.imagemContainer}>
                        <img src={prof.imagem} alt={prof.nome} className={styles.imagem} />
                      </div>
                      <div className={styles.textoProfissional}>
                        <p className={styles.nome}>{prof.nome}</p>
                        <p className={styles.especialidade}>{prof.especialidade}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <section className={styles.sobreClinica}>
  <h2 className={styles.titulo}>Sobre a Clínica</h2>
  <div className={styles.sobreClinicaContent}>
    <img src="clinica.jpg" alt="Sobre a Clínica" />
    <p>Informações sobre a clínica, missão, visão e valores.</p>
  </div>
</section>

{/* Seção "Nosso Cartão" */}
<section className={styles.cartao}>
  <h2 className={styles.titulo}>Nosso Cartão</h2>
  <div className={styles.cartaoContent}>
    <p>Detalhes sobre o cartão da clínica. Benefícios, vantagens, etc.</p>
    <img src="cartao.jpg" alt="Nosso Cartão" />
  </div>
</section>
        </section>
      
      
      
      
    );
  }
  
  export default Cartao;