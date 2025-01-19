'use client'
import Header from "./components/Header"
import ContactSection from "./components/ContactSection"
import CardList from "./components/CardList"
import Footer from "./components/Footer";
import Map from "./components/Map"
import WhatsappButton from "./components/WhatsappButton";
import ProfileCard from "./components/ProfileCard";
import Gallery from "./components/Gallery";
export default function Home() {

  return (
    <>
      <Header />
      <div className="header-spacer"></div>
      <ProfileCard></ProfileCard>
      <CardList />
      <ContactSection></ContactSection>
      <Map></Map>
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>


    </>
  )
}

