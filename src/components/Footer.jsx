import React from 'react';
import '../assets/styles/components/Footer.scss'

const Footer = () => {
    let holaMundo = "Hola mundo jajaja"
    return(
        <footer className="footer">
            <a href="/">Terminos de uso {holaMundo}</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>
    )
};

export default Footer;