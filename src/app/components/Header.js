import { useState, useEffect } from "react";
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

        // Cleanup del evento al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <p>Logo de WithLove</p>

            <ul>
                <li><a>Inicio</a></li>
                <li><a>Servicios</a></li>
                <li><a>Galeria</a></li>
                <li><a>Contacto</a></li>
            </ul>
            <button>Ordena ya!</button>
        </header>
    )
}

export default Header

