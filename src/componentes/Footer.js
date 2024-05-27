import React from 'react';
import '../compohome/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (

            <div className="footer-content">
                <p>© 2024 LUPANAR.WEB Todos os direitos reservados.</p>
                <ul className="socials">
                    <li><a href="#facebook"><FaFacebook /></a></li>
                    <li><a href="#twitter"><FaTwitter /></a></li>
                    <li><a href="#instagram"><FaInstagram /></a></li>
                </ul>
            </div>
    );
}

export default Footer;

