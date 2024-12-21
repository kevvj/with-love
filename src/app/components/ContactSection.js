import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    return (
        <div className="contact-section-container">
            <div className="contact-section">
                <div className="contact-content">
                    <h1> Monteria</h1>
                    <h2><FontAwesomeIcon icon={faPhone} size="1x" color="black"/>   +57 321 6301533</h2>
                    <h2><FontAwesomeIcon icon={faInstagram} size="1x" color="black"/> decoraciondeeventoswithlove</h2>

                    <h2><FontAwesomeIcon icon={faFacebook} size="1x" color="black"/> Creatividad y Eventos With Love</h2>
                </div>

            </div>
        </div>
    )
}

export default ContactSection