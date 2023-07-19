import React from "react";
import "./styles.css";

export default function Navbar() {
  const logo = "<Dandara />";
  return (
    <div>
      <nav>
        <div className="border">
          <span>{logo}</span>
          <ul className="styles-items">
            <li className="styles-li"> 
              <a href="#main">Inicio </a>
            </li>
            <li className="styles-li">
              <a href="#cardProfile">Sobre </a>
              </li>
            <li className="styles-li">
              <a href="#skills">Conhecimentos </a>
            </li>
            <li className="styles-li">
              <a href="#Projects">Projetos </a>
            </li>
            <li className="styles-li">
              <a href="#Contact">Contatos </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
