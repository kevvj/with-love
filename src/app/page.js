'use client'
import Header from "./components/Header"
import ContactSection from "./components/ContactSection"
import CardList from "./components/CardList"
import Footer from "./components/Footer";
import Map from "./components/Map"
import WhatsappButton from "./components/WhatsappButton";
import ProfileCard from "./components/ProfileCard";
import Gallery from "./components/Gallery";
import MainNav from "./components/MainNav";
export default function Home() {

  return (
    <>
      <Header />
      <MainNav></MainNav>
      <CardList />
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

