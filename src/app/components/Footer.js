
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Sobre Nosotros</h4>
                    <p>Creamos momentos mágicos con nuestras decoraciones infantiles personalizadas.</p>
                </div>
                <div className="footer-section">
                    <h4>Explora</h4>
                    <ul className="footer-list">
                        <li><a href="/home" className="footer-link">Inicio</a></li>
                        <li><a href="/services" className="footer-link">Servicios</a></li>
                        <li><a href="/gallery" className="footer-link">Galería</a></li>
                        <li><a href="/contact" className="footer-link">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contáctanos</h4>
                    <p>Email: <a href="mailto:info@decoracionesinfantiles.com" className="footer-link">info@decoracionesinfantiles.com</a></p>
                    <p>Teléfono: <a href="tel:+123456789" className="footer-link">+57 321 6301533</a></p>
                </div>
            </div>
            <div className="footer-copy">
                <p>&copy; 2024 Decoraciones Infantiles. Diseñando sueños únicos.</p>
            </div>
        </footer>
    )
}

export default Footer
