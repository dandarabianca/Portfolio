import React from "react";
import "./styles.css";
export default function Navbar() {
  const logo = "<Dandara />";
  return (
    <div>
      <nav>
        <div className="border">
          <span>{logo}</span>
          <ul>
            <li>Sobre mim: </li>
            <li>Meus projetos: </li>
            <li>Contatos: </li>
            <li>Testes2</li>
          </ul>
        </div>
        <div className="intro-menu">
          <h2>Óla me chamo</h2>
          <h1>Dandara Bianca</h1>
        </div>
        <div className="styles-menu">

        </div>
      </nav>
    </div>
  );
}
