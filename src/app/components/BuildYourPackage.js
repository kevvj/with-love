import { useState } from "react"
const BuildYourPackage = () => {
    const [quantities, setQuantities] = useState({})
    const [total, setTotal] = useState(0)

    const SelectableItems = [
        { id: 1, name: "Globos", price: 1000 },
        { id: 2, name: "Guirnaldas", price: 2000 },
        { id: 3, name: "Centros de Mesa", price: 3000 },
        { id: 4, name: "Piñata", price: 5000 },
        { id: 5, name: "Mantel Decorativo", price: 4000 },
    ]

    const handleQuantityChange = (id, event) => {
        let newQuantity = parseInt(event.target.value)

        if (newQuantity > 99) {
            newQuantity = 99
        }
        if (newQuantity < 0) {
            newQuantity = 0
        }

        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: newQuantity,
        }))

        const item = SelectableItems.find((items) => items.id === id)

        setTotal(total + (item.price * newQuantity))
    }

    const handleCheckBox = () =>{
        setTotal(total + 20000)
    }

    return (
        <div className="byp-container">
            <h1>Decoraciones personalizadas</h1>
            <div className="byp">
                <h2>Arma tu Paquete de Decoración</h2>

                {SelectableItems.map((items) =>
                    <div key={items.id} className="byp-content">

                        <div className="byp-description">
                            <p>{items.name}</p>
                            <span>({items.price} c/u)</span>
                        </div>

                        <input type="number" name="quantity" min="0" max="99" placeholder="0" value={quantities[items.id] || 0} onChange={(e) => handleQuantityChange(items.id, e)}></input>
                    </div>
                )}

                <div className="byp-checkbox">
                    <input onChange={handleCheckBox} type="checkbox" /><p> Tema personalizado</p>
                </div>

                <h2>Precio Total: {total}</h2>

                <button className="Button">Solicitar presupuesto</button>
            </div>
        </div>
    )
}

export default BuildYourPackage