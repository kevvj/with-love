import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        setIsClient(true)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>

            <div className="logo-img-container" onClick={() => router.push("/")}>
                <img src="/Logoimg.png" className="logo-img"></img>
                <img src="/LogoNombre.png" className="logo-name"></img>
            </div>


            <ul className="menu-header">
                <li><a onClick={() => router.push("/")}>Inicio</a></li>
                <li><a>Servicios</a></li>
                <li><a onClick={() => router.push("/gallery")}>Galeria</a></li>
                <li><a>Contacto</a></li>
            </ul>

            <button className="Button">Reservar {isClient && <FontAwesomeIcon icon={faStar} size="1x" color="white" />}</button>


            <div className="dropdown">
                <button className="dropdown-button"><FontAwesomeIcon icon={faBars} size="2x" color="black"></FontAwesomeIcon></button>
                <ul>
                    <li><a onClick={() => router.push("/")}>Inicio</a></li>
                    <li><a>Servicios</a></li>
                    <li><a onClick={() => router.push("/gallery")}>Galeria</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </div>

        </header>
    )
}

export default Header

