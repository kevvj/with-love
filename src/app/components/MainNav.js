const MainNav = () => {

    const listnav = [
        { id: 1, title: "Paquetes completos", text: "Paquetes de decoración listos para usar.", color: "#a767db" },
        { id: 2, title: "Alquiler", text: "Descubre nuestra increíble colección de artículos de decoración", color: "#ffa1d2" },
        { id: 3, title: "Arma tu paquete", text: "Crea un paquete segun tus preferencias", color: "#c1ff72" },]
    return (
        <div className="main-nav-container">
            <div className="main-nav-img">
                <div className="main-nav-img-text">
                    <h2>Espacio cool para niños ¡Descubrelo!</h2>
                </div>
            </div>

            <div className="main-nav">
                {listnav.map(list => (
                    <div className="main-nav-list" key={list.id} style={{backgroundColor: list.color}}>
                        <h2>{list.title}</h2>
                        <p>{list.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainNav