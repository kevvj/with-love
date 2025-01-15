'use client'
import Header from "../components/Header";
import RentDetails from "../components/RentDetails";
import TabNavigation from "../components/TabNavigation";

export default function Home() {

    return (
      <>
       <Header></Header>
       <div className="header-spacer"></div>
       <RentDetails></RentDetails>
      </>
    )
  }