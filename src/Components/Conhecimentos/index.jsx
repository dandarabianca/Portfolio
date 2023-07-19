import React from "react";
import "./styles.css";
import  ListaTarefas from "../../Assets/img/lista-tarefas.png"

export default function Conhecimentos(){
    return(
        <section id="skills">
        <div>
        <div className="styles.conhec">
            <h3>Conhecimentos</h3>

            <div className="card">
                <img src={ListaTarefas} alt="Logo Tarefas"></img>
             <h5>Lista de Tarefas</h5>
             <span>Projeto lista de tarefas</span>
             <a>Ver projetos</a>
            </div>
        </div>
        </div>
        </section>
    );
}
