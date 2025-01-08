import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'
const CardList = () => {

  const router = useRouter()

  const cardlist = [
    {
      id: 1,
      titulo: "Paquetes completos",
      descripcion:
        "Explora nuestros paquetes de decoración listos para usar.",
      imagen: "",
      color: "#ffd1dc",
      icon:faCalendarCheck,
      rute:"/complete-packages"
    },
    {
      id: 2,
      titulo: "Decoraciones temáticas",
      descripcion: "Explora nuestras decoraciones únicas para cada ocasión.",
      imagen: "",
      color: "#cde8fb",
      icon:faGift,
      rute:"/"
    },
    {
      id: 3,
      titulo: "Arma tu paquete",
      descripcion:
        "Explora las opciones y crea un paquete segun tus preferencias",
      imagen: "",
      color: "#fff8c5",
      icon:faHandshakeSimple,
      rute:"/make-it-yours"
    },
  ];

  return (
    <div className="cardlist-container">
      {cardlist.map((cardlist) => (
        <div
          key={cardlist.id}
          className="cardlist"
          style={{ backgroundColor: cardlist.color }}
        >

          <div>
            {/* <img
              alt={cardlist.titulo}
              className="cardlist-imagen"
            /> */}
            <div className="cardlist-icon">
            <FontAwesomeIcon size="1x" color="#white" icon={cardlist.icon}></FontAwesomeIcon>
            </div>
            

            <div className="cardlist-text">
              <h2 className="cardlist-titulo">{cardlist.titulo}</h2>
              <p className="cardlits-descripcion">{cardlist.descripcion}</p>
            </div>
          </div>
          <div className="button-container">
            <button className="Button" onClick={() => router.push(cardlist.rute)}>Mas detalles</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
