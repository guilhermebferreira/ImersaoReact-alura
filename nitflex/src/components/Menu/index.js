import React from "react";
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from "./ButtonLink";

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="AluraFlix - Imersão React Alura"/>
            </a>

            <ButtonLink
                classname="ButtonLink"
                href="/"
            >
                Novo vídeo
            </ButtonLink>
        </nav>
    );

}

export default Menu;