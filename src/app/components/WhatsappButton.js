const WhatsappButton = () => {
    const phoneNumber = "+573216301533"
    const whatsappLink = `https://wa.me/${phoneNumber}`

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <img src="/WhatsApp.svg"></img>
        </a>
    )
}

export default WhatsappButton