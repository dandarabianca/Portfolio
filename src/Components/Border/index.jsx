import React from "react";
import "./styles.css";
import LogoTexto from "../../Assets/img/teste.avif";

export default function Border() {
  return (
    <div className="border-container">
      <div className="styles-menu">
        <span>Sobre mim</span>
      </div>
      <div className="intro-img">
        <img src={LogoTexto} alt="Logo do Texto"></img>
        </div>
        <div className="styles-name">
          <span>
            Sou uma desenvolvedora com experiência em construir sistemas
            interativos e acessíveis. Possuo um sólido conhecimento técnico e
            habilidades em diversas linguagens de programação. Sou uma pessoa
            curiosa e sempre busca aprender novas tecnologias e ferramentas para
            aprimorar minhas habilidades. Estou atualmente em busca de novas
            oportunidades de trabalho, sou comprometida em criar soluções
            inovadoras e impactantes por meio da programação.
          </span>
        </div>
    </div>
  );
}
