'use client'
import Header from "./components/Header"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Map from "./components/Map"
import WhatsappButton from "./components/WhatsappButton"
import ProfileCard from "./components/ProfileCard"
import MainNav from "./components/MainNav"
export default function Home() {

  return (
    <>

      <div className="header-nav">
        <Header />
        <MainNav></MainNav>
      </div>
      <ProfileCard></ProfileCard>

      <div className="map-contact">
        <Map></Map>
        <ContactSection></ContactSection>
      </div>
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>



    </>
  )
}

