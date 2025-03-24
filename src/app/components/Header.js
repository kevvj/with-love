import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
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


            <div className="header-bar">

                <ul className="menu-header">
                    <li><a onClick={() => router.push("/")}>Inicio</a></li>
                    <li><a>Servicios</a></li>
                    <li><a onClick={() => router.push("/gallery")}>Galeria</a></li>
                    <li><a onClick={() => router.push("/contact")}>Contacto</a></li>
                </ul>

                <h1>WithLove</h1>

                <div className="dropdown" onClick ={() => handleMenu()}>

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

                <div className="header-social-media">
                    <a href="https://www.instagram.com/decoraciondeeventoswithlove/"><FontAwesomeIcon icon={faInstagram} size="1x" color="white" className="social-items"></FontAwesomeIcon></a>
                    <a href="https://www.facebook.com/creatividadwithlove?mibextid=ZbWKwL" ><FontAwesomeIcon icon={faFacebook} size="1x" color="white" className="social-items"></FontAwesomeIcon></a>
                    <a href="https://wa.me/+573216301533"><FontAwesomeIcon icon={faWhatsapp} size="1x" color="white" className="social-items"></FontAwesomeIcon></a>
                </div>
            </div>

            
        </header>
    )
}

export default Header

