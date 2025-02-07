'use client'
import Header from "../components/Header";
import CompletPackages from "../components/CompletPackages"


export default function Home() {

  return (
    <>
      <Header></Header>
      <div className="header-spacer"></div>

      <CompletPackages></CompletPackages>
    </>

  )
}

