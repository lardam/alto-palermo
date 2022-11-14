import Image from "next/image"
import Link from "next/link"
import logo from "/public/logo_1.png"

export function Header(){
    return(
        <header>
            <Link href='/' id="home-logo" title='Alto Palermo'><Image alt="Alto Palermo" src={logo} width={90} height={60} priority/></Link>
        </header>
    )
}