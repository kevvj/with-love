'use client'
import Header from "./components/Header"
import ContactSection from "./components/ContactSection"
import CardList from "./components/CardList"
import Footer from "./components/Footer";
import Map from "./components/Map"
import WhatsappButton from "./components/WhatsappButton";
export default function Home() {

  return (
    <>
      <Header />
      <div className="header-spacer"></div>
      <ContactSection></ContactSection>
      <CardList/>
      <Map></Map>
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>
    </>
  )
}

