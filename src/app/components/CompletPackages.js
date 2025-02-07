import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faWandMagicSparkles, faBomb } from "@fortawesome/free-solid-svg-icons";

const CompletPackages = () => {

    const completepackages = [
        {
            id: 1,
            titulo: "Fiestas Divertidas",
            descripcion:
                "Paquetes de decoración listos para usar.",
            imagen: "",
            color: "#FF6A6F",
            icon: faBomb,
            rute: "/complete-packages",
            detalles: [
                "Decoraciones tematicas completas",
                "Animador profesional",
                "karaoke concursos",
                "Maquillaje infantil",
                "Piñatas personalizadas"
            ]

        },
        {
            id: 2,
            titulo: "Super celebraciones",
            descripcion: "Decoraciones únicas para cada ocasión.",
            imagen: "",
            color: "#72FF35",
            icon: faGift,
            rute: "/theme-decorations",
            detalles: [
                "Decoraciones tematicas completas",
                "Animador profesional",
                "karaoke concursos",
                "Maquillaje infantil",
                "Piñatas personalizadas"
            ]
        },
        {
            id: 3,
            titulo: "Fiestas espectaculares",
            descripcion:
                "Crea un paquete segun tus preferencias",
            imagen: "",
            color: "#FFCB22",
            icon: faWandMagicSparkles,
            rute: "/make-it-yours",
            detalles: [
                "Decoraciones tematicas completas",
                "Animador profesional",
                "karaoke concursos",
                "Maquillaje infantil",
                "Piñatas personalizadas"
            ]
        },

    ];

    return (
        <div className="complete-complete">
             <h2 className="completepackages-title">Paquetes Completos</h2>

        <div className="completepackages-container">
           
            {completepackages.map((completepackages) => (

                <div
                    key={completepackages.id}
                    className="completepackages"
                    style={{ backgroundColor: completepackages.color }}
                >


                    {/* <img
                  alt={completepackages.titulo}
                  className="completepackages-imagen"
                /> */}
                    <div className="completepackages-icon">
                        <FontAwesomeIcon size="1x" color="#white" icon={completepackages.icon}></FontAwesomeIcon>
                    </div>


                    <div className="completepackages-text">
                        <h2 className="completepackages-titulo">{completepackages.titulo}</h2>
                        <p className="completepackages-descripcion">{completepackages.descripcion}</p>
                        <ul className="completepackages-detalles">
                            {completepackages.detalles.map((detalle, index) => (
                                <li key={index}>{detalle}</li>
                            ))}
                        </ul>
                    </div>


                </div>
            ))}
        </div>
        </div>
    );


}
export default CompletPackages;