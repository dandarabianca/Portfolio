import React from "react";
import "./styles.css";
import ListaTarefas from "../../Assets/img/lista-tarefas.png";
import Landing from "../../Assets/img/img-landing.png";

export default function Projetos() {
  return (
    <section id="Projects">
      <div className="projects-card">
        <div className="styles.conhec">
          <h3>Projetos</h3>

          <div className="card">
            <img src={ListaTarefas} alt="Logo Tarefas"></img>
            <h5>Lista de Tarefas</h5>
            <span>Projeto lista de tarefas</span>
            <a href="https://lista-de-tarefas-dandara.netlify.app/" target="_blank" rel="noreferrer" className="styles-a">Ver projetos</a>
          </div>

          <div className="card">
            <img src={Landing} alt="Logo Landing"></img>
            <h5>Landing Pagin</h5>
            <span>Projetob Landing Pagem</span>
            <a href="https://sitelandingpage.netlify.app/#contact" target="_blank" rel="noreferrer" className="styles-a">Ver projetos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
