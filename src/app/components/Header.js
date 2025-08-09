import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons"
import MenuButton from "./Button/MenuButton"
import { faX } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const [isclosed, setiIsclosed] = useState(true)
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

    const handleMenu = () => {
        setiIsclosed(!isclosed)
        console.log(isclosed)
    }


    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>

            <div className="top">Creando momentos mágicos que tus pequeños recordarán por siempre</div>


            <div className="header-bar">

                <div className="header-social">

                    <ul className="header-social-item">
                        <li>Sobre nosotros</li>
                        <li>Buscar</li>
                        <li>Contactanos</li>
                    </ul>

                    <div className="header-social-media">
                        <a href="https://www.instagram.com/decoraciondeeventoswithlove/"><FontAwesomeIcon icon={faInstagram} size="1x" className="social-items"></FontAwesomeIcon></a>
                        <a href="https://www.facebook.com/creatividadwithlove?mibextid=ZbWKwL" ><FontAwesomeIcon icon={faFacebook} size="1x" className="social-items"></FontAwesomeIcon></a>
                        <a href="https://wa.me/+573216301533"><FontAwesomeIcon icon={faWhatsapp} size="1x" className="social-items"></FontAwesomeIcon></a>
                        <div className="span"><FontAwesomeIcon icon={faEarthAmerica} ></FontAwesomeIcon> Español</div>
                        <div className="header-price span" ><img src="/co.webp"></img> COP $</div>
                    </div>

                </div>

                <h1>With<span>Love</span></h1>

                <div className="header-menu">

                    <ul className="menu-header">
                        <li><a onClick={() => router.push("/")}>Inicio</a></li>
                        <li><a>Servicios</a></li>
                        <li><a onClick={() => router.push("/gallery")}>Galeria</a></li>
                        <li><a onClick={() => router.push("/contact")}>Contacto</a></li>
                    </ul>

                </div>



                <div className="dropdown" onClick={() => handleMenu()}>

                    <MenuButton></MenuButton>

                    <div className="dropdown-content" style={{ display: isclosed ? "none" : "block" }}>

                        <div className="dropdown-button-container">
                            <button onClick={() => handleMenu()}>
                                <FontAwesomeIcon icon={faX} color="black" className="close-button"></FontAwesomeIcon>
                            </button>
                        </div>

                        <ul>
                            <li onClick={() => router.push("/")}>
                                <a>Inicio</a>

                            </li>
                            <li>
                                <a>Servicios</a>

                            </li>
                            <li onClick={() => router.push("/gallery")}>
                                <a>Galeria</a>

                            </li>
                            <li onClick={() => router.push("/contact")}>
                                <a>Contacto</a>

                            </li>
                        </ul>

                    </div>




                </div>


            </div>


        </header>
    )
}

export default Header

