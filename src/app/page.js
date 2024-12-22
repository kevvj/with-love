'use client'
import Header from "./components/Header"
import ContactSection from "./components/ContactSection"
import CardList from "./components/CardList"
import { ClipLoader } from "react-spinners";
export default function Home() {

  return (
    <>
      <Header />
      <ContactSection></ContactSection>
      <CardList/>
      
    </>
  )
}

