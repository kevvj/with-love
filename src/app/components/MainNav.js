const MainNav = () => {

    const listnav = [
        { id: 1, title: "Ejemplo", text: "texto de Ejemplo con todo y textoasodiq", color: "#a767db" },
        { id: 2, title: "Ejemplo", text: "texto de Ejemplo con todo y textoasodiq", color: "#ffa1d2" },
        { id: 3, title: "Ejemplo", text: "texto de Ejemplo con todo y textoasodiq", color: "#c1ff72" },]
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