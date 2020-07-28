import React from "react";

function ButtonLink(props) {
    // props => { classname: "nome da class", href: "/" }
    return (
        <a className={props.classname} href={props.href}>
            {props.children}
        </a>
    );

}

export default ButtonLink;