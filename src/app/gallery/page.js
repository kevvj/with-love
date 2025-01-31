'use client'
import Gallery from "../components/Gallery";
import Header from "../components/Header";

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className="header-spacer"></div>
            <Gallery></Gallery>
        </>
    )
}