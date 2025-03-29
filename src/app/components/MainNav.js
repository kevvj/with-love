import Link from "next/link"
import { useRouter } from 'next/navigation'

const MainNav = () => {

    const router = useRouter()

    const listnav = [
        { id: 1, title: "Nuestros paquetes", text: "Paquetes de decoración listos para usar.", color: "#a767db", rute: "/complete-packages" },
        { id: 2, title: "Alquiler", text: "Descubre nuestra increíble colección de artículos de decoración", color: "#64d5ff", rute: "/rent" },
        { id: 3, title: "Papeleria creativa", text: "Crea un paquete segun tus preferencias", color: "#c1ff72", rute: "/make-it-yours" },
        { id: 4, title: "Talleres", text: "Crea un paquete segun tus preferencias", color: "#ffa1d2", rute: "/make-it-yours" }]
    return (
        <div className="main-nav-container">
            <div className="main-nav-img">
                <div className="main-nav-img-text">
                    <h2>Decoraciones encantadoras, hechas con amor</h2>
                </div>
            </div>

            <div className="main-nav">
                {listnav.map(list => (
                    <div className="main-nav-list" key={list.id} style={{ backgroundColor: list.color }} onClick={() => router.push(list.rute)}>
                        <h2>{list.title}</h2>
                        <p>{list.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainNav