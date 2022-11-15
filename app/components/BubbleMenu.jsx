import { useState } from "react"
import Link from "next/link"

export function Menu(){
    const [toggle, setToggle] = useState(false)

    return(
        <div id="bubble-menu" className={`bubble${toggle ? " open-bubble" : ""}`}>
            <p id="menu-title" onClick={() => setToggle(true)}>menú</p>
            <nav id="nav-menu">
                <ul id="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" href='/locales'>
                            <i className="nav-icon fa-solid fa-shop" />
                            <p className="nav-title">locales</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./#social-container'>
                            <i className="nav-icon fa-solid fa-hashtag" />
                            <p className="nav-title">redes</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./#services-container'>
                            <i className="nav-icon fa-solid fa-hands-holding" />
                            <p className="nav-title">servicios</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./#contact-container'>
                            <i className="nav-icon fa-solid fa-phone" />
                            <p className="nav-title">contacto</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i id="close-bubble" onClick={() => setToggle(false)} className="nav-icon fa-solid fa-xmark" />
                            <p className="nav-title">cerrar</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}