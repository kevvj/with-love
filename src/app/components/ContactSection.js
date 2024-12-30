'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

const ContactSection = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <div className="contact-section-container">
            <div className={isClient ? "contact-section" : "contact-section-spinner"}>
                <div className="contact-content">
                    <h1> Monteria</h1>
                    <a target="_blank">
                        {isClient && <FontAwesomeIcon icon={faPhone} size="1x" color="black" />}

                        <h2> +57 321 6301533</h2></a>

                    <a href='https://www.instagram.com/decoraciondeeventoswithlove?igsh=MThiMjc5NGV0NjMzag==' target="_blank">
                        {isClient && <FontAwesomeIcon icon={faInstagram} size="1x" color="black" />}

                        <h2> decoraciondeeventoswithlove</h2></a>

                    <a href='https://www.facebook.com/creatividadwithlove?mibextid=ZbWKwL' target="_blank">
                        {isClient && <FontAwesomeIcon icon={faFacebook} size="1x" color="black" />}

                        <h2> Creatividad y Eventos With Love</h2></a>
                </div>

            </div>

        </div>
    )
}

export default ContactSection