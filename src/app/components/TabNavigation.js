import { useState } from "react"

const TabNavigation = () => {

    const [checkButton, setCheckButton] = useState([
        { id: 1, check: true },
        { id: 2, check: false },
        { id: 3, check: false }])



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
    )
}

export default TabNavigation