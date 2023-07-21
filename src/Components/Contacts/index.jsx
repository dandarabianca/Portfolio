import React from "react";
import "./styles.css";
import telefone from "../../Assets/img/img-telefonee.png"
import github from "../../Assets/img/img-git.png"

export default function Contacts() {
    return (
        <section id="Contact">
            <footer>
              <h5>Dandara Bianca</h5>
              <span>Para mais informações</span>
            </footer>

            <div className="social">
                <a href="tel:+5551994742528">
                    <img src={telefone} alt="Logo Telefone"></img>
                </a>
                <a href="https://github.com/dandarabianca" target="_blank">
                    <img src={github} alt="Logo Email"></img>

                    </a>
            </div>
        </section>
    )
}