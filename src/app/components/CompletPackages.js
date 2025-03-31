import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faWandMagicSparkles, faBomb } from "@fortawesome/free-solid-svg-icons";

const CompletPackages = () => {

    const completepackages = [
        {
            id: 1,
            titulo: "Fiestas Divertidas",
            descripcion:
                "Paquetes de decoración listos para usar.",
            image: "/—Pngtree—cute birthday animals illustration_5331094.png",
            color: "#FF6A6F",
            icon: faBomb,
            rute: "/complete-packages",
            

        },
        {
            id: 2,
            titulo: "Super celebraciones",
            descripcion: "Decoraciones únicas para cada ocasión.",
            image: "/happy-birthday-cartoons_24640-27310.jpg",
            color: "#72FF35",
            icon: faGift,
            rute: "/theme-decorations",
        },
        {
            id: 3,
            titulo: "Fiestas espectaculares",
            descripcion:
                "Crea un paquete segun tus preferencias",
            image: "/hand-drawn-confetti-drawing-illustration_23-2150918176.jpg",
            color: "#FFCB22",
            icon: faWandMagicSparkles,
            rute: "/make-it-yours",
        },

    ];

    return (
        <div className="complete-complete">
             <h2 className="completepackages-title">Paquetes completos para cada ocación</h2>

        <div className="completepackages-container">
           
            {completepackages.map((completepackages) => (

                <div
                    key={completepackages.id}
                    className="completepackages"
                    style={{borderColor: completepackages.color}}
                >

                    


                    <div className="completepackages-text">
                        <h2 style={{color: completepackages.color, fontSize: "1.3rem"}}>Paquete</h2>
                        <h2 style={{color: completepackages.color}} className="completepackages-titulo" >{completepackages.titulo}</h2>
                        <img src={completepackages.image}></img>
                        <p className="completepackages-descripcion">{completepackages.descripcion}</p>

                        <p className="completepackages-price">$130</p>

                        <button className="completepackages-button" style={{backgroundColor: completepackages.color}}>Ver más</button>
                        
                    </div>


                </div>
            ))}
        </div>
        </div>
    );


}
export default CompletPackages;