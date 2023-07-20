import React from "react";
import "./styles.css";
import Landing from "../../Assets/img/img-landing.png"

export default function Projects() {
    return (
        <section id="Projects">
          <div>
        <div className="stylesProjects">
          <h3>Meus Projetos</h3>
         
          <div className="cardProjects">
            <img src={Landing} alt="Logo Landing"></img>
            <h5>Lista de Tarefas</h5>
             <span>Projeto lista de tarefas</span>
             <a>Ver projetos</a>
          </div>
        </div>
        </div>
        </section>
    )
}