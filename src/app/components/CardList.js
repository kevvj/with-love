const CardList = () => {
    const cardlist = [
      {
        id: 1,
        titulo: "Paquetes completos",
        descripcion:
          "Explora nuestros paquetes de decoración listos para usar, inspirados en trabajos anteriores y temáticas populares. Cada paquete incluye mobiliario, decoraciones y detalles perfectos para transformar tu evento sin complicaciones.",
        imagen: "/image1.jpg",
        color: "#ffd1dc",
      },
      {
        id: 2,
        titulo: "Decoraciones temáticas",
        descripcion:
          "Explora nuestras decoraciones únicas para cada ocasión.",
        imagen: "/image2.jpg",
        color: "#cde8fb",
      },
      {
        id: 3,
        titulo: "Ambientes personalizados",
        descripcion:
          "Transforma cualquier lugar en un espacio único, adaptado a tus preferencias.",
        imagen: "/image3.jpg",
        color: "#fff8c5",
      },
      {
        id: 4,
        titulo: "Ambientes personalizados",
        descripcion:
          "Transforma cualquier lugar en un espacio único, adaptado a tus preferencias.",
        imagen: "s",
        color: "#fff8c5",
      },
      {
        id: 5,
        titulo: "Ambientes personalizados",
        descripcion:
          "Transforma cualquier lugar en un espacio único, adaptado a tus preferencias.",
        imagen: "s",
        color: "#fff8c5",
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
              <img
                src={cardlist.imagen}
                alt={cardlist.titulo}
                className="cardlist-imagen"
              />
              <h2 className="cardlist-titulo">{cardlist.titulo}</h2>
              <p className="cardlits-descripcion">{cardlist.descripcion}</p>
            </div>
          ))}
        </div>
      );
    };

export default CardList