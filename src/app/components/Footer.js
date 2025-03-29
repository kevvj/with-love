import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-info">
                <div>
                    
                        <FontAwesomeIcon icon={faFacebook} />
                    
                   
                        <FontAwesomeIcon icon={faXTwitter} />
                    
                    
                        <FontAwesomeIcon icon={faInstagram} />
                    
                </div>

                <p>Carrera 6 No. 77-305 Montería - Córdoba, Colombia | Código Postal: 230002 | NIT: 891080031-3 | contacto@withlove.com</p>
                <p>WithLove, empresa de decoraciones. Todos los derechos reservados • Colombia - Suramérica • Copyright © 2023</p>

            </div>
        </footer>
    )
}

export default Footer
