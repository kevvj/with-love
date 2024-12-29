const WhatsappButton = () => {
    const phoneNumber = "+573216301533"
    const whatsappLink = `https://wa.me/${phoneNumber}`

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png"></img>
        </a>
    )
}

export default WhatsappButton