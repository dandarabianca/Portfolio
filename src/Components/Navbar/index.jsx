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
            <li>Inicio:</li>
            <li>Sobre: </li>
            <li>Projetos: </li>
            <li>Contatos: </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
