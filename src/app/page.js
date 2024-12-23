'use client'
import Header from "./components/Header"
import ContactSection from "./components/ContactSection"
import CardList from "./components/CardList"
import { ClipLoader } from "react-spinners";
import Footer from "./components/Footer";
import Map from "./components/Map"
export default function Home() {

  return (
    <>
      <Header />
      <ContactSection></ContactSection>
      <CardList/>
      <Map></Map>
      <Footer></Footer>
      
      
    </>
  )
}

