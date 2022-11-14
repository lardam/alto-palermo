'use client'
import { Header } from "./components/Header"

export default function Home(){
    return(
        <>
        <Header />
        <main>
            <div className="sec"><p>Sec 1</p></div>
            <div className="sec"><p>Sec 2</p></div>
            <div className="sec"><p>Sec 3</p></div>
        </main>
        </>
    )
}