import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import MenuButton from "./Button/MenuButton";
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

            {/* <div className="logo-img-container" onClick={() => router.push("/")}>
                <img src="/Logoimg.png" className="logo-img"></img>
            </div> */}

            <div className="header-bar">

                <ul className="menu-header">
                    <li><a onClick={() => router.push("/")}>Inicio</a></li>
                    <li><a>Servicios</a></li>
                    <li><a onClick={() => router.push("/gallery")}>Galeria</a></li>
                    <li><a onClick={() => router.push("/contact")}>Contacto</a></li>
                </ul>

                <h1>WithLove</h1>

                <div className="dropdown">

                    <MenuButton></MenuButton>

                    <div>
                        <ul>
                            <li onClick={() => router.push("/")}>
                                <a>Inicio</a>

                                <span>
                                    <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                                </span>

                            </li>
                            <li>
                                <a>Servicios</a>
                                <span>
                                    <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                                </span>
                            </li>
                            <li onClick={() => router.push("/gallery")}>
                                <a>Galeria</a>
                                <span>
                                    <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                                </span>
                            </li>
                            <li onClick={() => router.push("/contact")}>
                                <a>Contacto</a>
                                <span>
                                    <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                                </span>
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

