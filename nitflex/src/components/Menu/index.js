import React from "react";
import Logo from '../../assets/img/logo.png'
import './Menu.css'

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="AluraFlix - Imersão React Alura"/>
            </a>

            <a className="ButtonLink" href="/"> Novo vídeo</a>
        </nav>
    );

}

export default Menu;