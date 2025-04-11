import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
const Taller = () => {
    return (
        <div className="taller-page-container">
            <div className="taller-container">
                
                <div className="taller-decoraciones">
                    <img src="sol.png" className="decoracion sol" alt="Sol" />
                    <img src="arcoiris.png" className="decoracion arcoiris" alt="Arcoíris" />
                    <img src="mariposa.png" className="decoracion mariposa" alt="Mariposa" />
                    <img src="flor.png" className="decoracion flor" alt="flor" />
                    <img src="estrella.png" className="decoracion estrella estrella2" alt="estrella" />
                </div>

                
                <div className="taller-title-container">
                    <h1>
                        <span>Despierta la</span> <br />
                        <span>creatividad con</span> <br />
                        <span>nuestros talleres</span>
                    </h1>
                </div>

            </div>
            
            
            <div className="taller-center-container">
                <div className="taller-card">
                    <img src="niño-pintando.png" />
                    <h1>Taller de pintura</h1>
                    <span>Explora colores y tecnicas pictoricas</span>
                    <button>Más información</button>
                </div>
                    
                <div className="taller-card">
                    <img src="niña-globoflexia.png" />
                    <h1>Taller de globoflexia</h1>
                    <span>Aprende a hacer figuras con globos</span>
                    <button>Más información</button>
                </div>
            </div>
                
            <div className="taller-bottom-container">
                <div className="taller-card-bottom">
                    <img src="cupcake-girl.png" />
                    <h1>Taller de decoracion de cupcakes</h1>
                    <span>Decora deliciosos cupcakes</span>
                    <button>Más información</button>
                </div>
                    
                <div className="taller-card-bottom">
                    <img src="chico-manualidades.png" />
                    <h1>Taller de manualidades</h1>
                    <span>Crea divertidos proyectos hechos a mano</span>
                    <button>Más información</button>
                </div>        
            </div>
        </div>    
        
    );  
};

export default Taller;