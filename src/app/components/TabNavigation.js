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
                result = [{ id: 1, name: "Sillas", icon: faChair, price: 15000, img: "/sillas.jpg" },
                { id: 2, name: "Mesas", icon: faTable, price: 20000, img: "/mesas.jpg" },
                { id: 3, name: "Puelco", icon: faHorse, price: 10000, img: "/puelco.jpg" }]
                break

            case 2:
                result = [{ id: 1, name: "Aro dorado", icon: faWandSparkles, price: 12000, img: "/aro-dorado.png" },
                { id: 2, name: "Kit de fiesta 1", icon: faBomb, price: 8000, img: "/kit-deco-deformita.jpeg" },
                { id: 3, name: "Kit de fiesta 2", icon: faHorse, price: 10000, img: "/Kitfiesta2.jpeg" }, 
                { id: 4, name: "Numero neon", icon: faHorse, price: 10000, img: "/Decoracion-Neon-vintage-.jpeg" },
                { id: 5, name: "Explosión de Colores", icon: faHorse, price: 10000, img: "/ExplosionColor.jpg" },
                { id: 6, name: "Party Spark", icon: faHorse, price: 10000, img: "/partyspark.webp" },
                { id: 7, name: "Energía Pop", icon: faHorse, price: 10000, img: "/popenergy.jpg" },
                { id: 8, name: "Arcoiris de Papel", icon: faHorse, price: 10000, img: "/Arcoiris.jpg" }]
                break

            case 3:
                result = [{ id: 1, name: "Parlante", icon: faMusic, price: 10000, img: "/parlante.jpg" },
                { id: 2, name: "Actividades", icon: faClipboardList, price: 20000, img: "/Disfraces-y-deporte.jpg" },
                { id: 3, name: "Puelco", icon: faHorse, price: 10000, img: "/puelco.jpg" }]
                break
        }

        const forn = result

        return (
            <div className="forniture-container">
                {
                    forn.map((item) => (
                        <div key={item.id} className="forniture">

                            <img src={item.img}></img>
                            <div className="forniture-description">
                                <h2>{item.name}</h2>
                                <p>{item.price} $</p>
                            </div>
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