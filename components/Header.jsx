import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo_1.png"
import { useState, useEffect } from "react"

export function Header(){
    const [header, setHeader] = useState(104)
    const [logoHeight, setLogoHeight] = useState(60)
    const [logoWidth, setLogoWidth] = useState(90)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500){
                setHeader(62)
                setLogoHeight(29)
                setLogoWidth(43)
            } 
            else{
                setHeader(104)
                setLogoHeight(60)
                setLogoWidth(90)
            }
        });
    }, []);

    return(
        <header style={{height: header}}>
            <Link href='/' id="home-logo" title='Alto Palermo'><Image alt="Alto Palermo" src={logo} width={logoWidth} height={logoHeight} priority/></Link>
        </header>
    )
}