import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
const BuildYourPackage = () => {
    const [total, setTotal] = useState(0)
    const [isClient, setIsClient] = useState(false)
    const [isSelected, setIsSelected] = useState([])
    const [sections, setSections] = useState([
        {
            id: 1, isOpen: true
        },
        {
            id: 2, isOpen: false
        },
        {
            id: 3, isOpen: false
        }
    ])

    useEffect(() => {
        setIsClient(true)
    }, [])

    const SelectableItems = [
        { id: 1, name: "Servicio uno", price: 1000, section: 1 },
        { id: 2, name: "Servicio dos", price: 2000, section: 1 },
        { id: 3, name: "Servicio tres", price: 3000, section: 1 },
        { id: 4, name: "Servicio cuatro", price: 5000, section: 1 },
        { id: 5, name: "Servicio cinco", price: 4000, section: 1 },
        { id: 6, name: "Servicio seis", price: 1000, section: 2 },
        { id: 7, name: "Servicio siete", price: 2000, section: 2 },
        { id: 8, name: "Servicio ocho", price: 3000, section: 2 },
        { id: 9, name: "Servicio nueve", price: 5000, section: 2 },
        { id: 10, name: "Servicio diez", price: 4000, section: 2 },
        { id: 11, name: "Servicio once", price: 1000, section: 3 },
        { id: 12, name: "Servicio doce", price: 2000, section: 3 },
        { id: 13, name: "Servicio trece", price: 3000, section: 3 },
        { id: 14, name: "Servicio catorce", price: 5000, section: 3 },
        { id: 15, name: "Servicio quince", price: 4000, section: 3 },
    ]

    const itemsSections = [{ id: 1, name: "Seccion 1" }, { id: 2, name: "Seccion 2" }, { id: 3, name: "Seccion 3" }]

    const handleSections = (id) => {
        setSections(prevSections => prevSections.map(section => (
            section.id === id ? { ...section, isOpen: !section.isOpen } : section
        )))

        console.log(sections)
    }

    const handleCheck = (price, newID) => {
        setTotal(total + price)

        setIsSelected(prevItems => {
            if (!prevItems.some(item => item.id === newID)) {
                setTotal(total + price)
                return [...prevItems, { id: newID }]
            }else{
                setTotal(total - price)
                return prevItems.filter(item => item.id !== newID)
            }
        })

        console.log(isSelected)
    }


    return (
        <div className="byp-container">
            <h1>Decoraciones personalizadas</h1>
            <div className="byp">
                <h2>Arma tu Paquete de Decoración</h2>

                <div className="byp-content-container">


                    <div className="byp-section-container">
                        {isClient &&
                            itemsSections.map((items) =>
                                <div key={items.id} className="byp-section">
                                    <div className="byp-section-title" onClick={() => handleSections(items.id)}>
                                        <p>{items.name}</p> 

                                        <div id="icon">
                                        <FontAwesomeIcon icon={faChevronDown} ></FontAwesomeIcon>
                                        </div>
                                        
                                    </div>


                                    {SelectableItems.filter((secitem) => secitem.section === items.id)
                                        .map((si) => (

                                            <div key={si.id} className={sections.find((is) => is.id === items.id).isOpen ? "byp-content" : "no-byp-content"}>

                                                <div className="byp-description">
                                                    {/* {isClient &&<FontAwesomeIcon icon={faStar} color="rgb(255, 0, 64)"></FontAwesomeIcon>} */}
                                                    <img src="/mesas.jpg"></img>
                                                    <p>{si.name}</p>
                                                    <span>( {si.price} $ )</span>
                                                </div>

                                                

                                                <div className={isSelected.some(isse => isse.id === si.id) ? "byp-check":"no-byp-check"} 
                                                
                                                onClick={() => handleCheck(si.price, si.id)}>
                                                    {isClient && <FontAwesomeIcon className="icon-byp-check" icon={faPlus} size="1x"
                                                    ></FontAwesomeIcon>}
                                                </div>

                                            </div>
                                        ))}

                                </div>

                            )
                        }
                    </div>

                </div>

                {/* <div className="byp-checkbox">
                    <input onChange={handleCheckBox} type="checkbox" /><p> Tema personalizado</p>
                </div> */}

                <h2>Precio Total: {total}</h2>

                <button className="Button">Solicitar presupuesto</button>
            </div>
        </div>
    )
}

export default BuildYourPackage