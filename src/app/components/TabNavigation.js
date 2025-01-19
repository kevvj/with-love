import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChair } from "@fortawesome/free-solid-svg-icons"
import { faTable } from "@fortawesome/free-solid-svg-icons"
import { faHorse } from "@fortawesome/free-solid-svg-icons"
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons"
import { faBomb } from "@fortawesome/free-solid-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { faClipboardList } from "@fortawesome/free-solid-svg-icons"

const TabNavigation = () => {

    const [checkButton, setCheckButton] = useState([
        { id: 1, check: true },
        { id: 2, check: false },
        { id: 3, check: false }])


    const handleContent = () => { }

    const Forniture = () => {

        const check = checkButton.find((list) => list.check === true)

        let result = []

        switch (check.id) {
            case 1:
                result = [{ id: 1, name: "Sillas", icon: faChair, price: 15000 },
                { id: 2, name: "Mesas", icon: faTable, price: 20000 },
                { id: 3, name: "Puelco", icon: faHorse, price: 10000 }]
                break

            case 2:
                result = [{ id: 1, name: "Confeti", icon: faWandSparkles, price: 12000 },
                { id: 2, name: "Globos", icon: faBomb, price: 8000 },
                { id: 3, name: "Puelco", icon: faHorse, price: 10000 }]
                break

            case 3:
                result = [{ id: 1, name: "Parlante", icon: faMusic, price: 10000 },
                { id: 2, name: "Actividades", icon: faClipboardListÑ, price: 20000 },
                { id: 3, name: "Puelco", icon: faHorse, price: 10000 }]
                break
        }

        const forn = result

        return (
            <div className="forniture-container">
                {
                    forn.map((item) => (
                        <div key={item.id} className="forniture">

                            <div className="forniture-description">
                                <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                                <h2>{item.name}</h2>
                                <p>{item.price} $</p>
                            </div>


                            <button className="Button">Agregar</button>

                        </div>
                    ))
                }
            </div>
        )
    }


    const handleButtonClick = (id) => {

        const itemExist = checkButton.some(item => item.id === id)

        const result = checkButton.map((item) => {
            if (item.id === id) {
                return { ...item, check: true }
            }
            return { ...item, check: false }
        })

        if (!itemExist) {
            result.push({ id, check: false })
        }
        setCheckButton(result)
    }

    const tabs = [
        { id: 1, name: "Mobiliario" },
        { id: 2, name: "Decoración" },
        { id: 3, name: "Entretenimiento" },
    ]

    return (
        <>
            <div className="tabs-container">

                {tabs.map((tab) => (

                    <button
                        key={tab.id}
                        className={
                            checkButton.find(item => item.id === tab.id)?.check ? "Button-check" : "Button"
                        }

                        onClick={() => handleButtonClick(tab.id)}>

                        {tab.name}

                    </button>

                ))}
            </div>

            <Forniture></Forniture>
        </>
    )
}

export default TabNavigation