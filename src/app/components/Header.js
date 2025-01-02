import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <p>WithLove</p>

            <ul className="menu-header">
                <li><a>Inicio</a></li>
                <li><a>Servicios</a></li>
                <li><a>Galeria</a></li>
                <li><a>Contacto</a></li>
            </ul>
            <button className="order-button">Reservar <FontAwesomeIcon icon={faStar} size="1x" color="white" /></button>

            <div className="dropdown">
            <button className="dropdown-button"><FontAwesomeIcon icon={faBars} size="2x" color="white"></FontAwesomeIcon></button>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Servicios</a></li>
                <li><a>Galeria</a></li>
                <li><a>Contacto</a></li>
            </ul>
            </div>
        
        </header>
    )
}

export default Header

