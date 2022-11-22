import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faHashtag, faHandsHolding, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'

export function Menu(){
    const [toggle, setToggle] = useState(false)

    return(
        <div id="bubble-menu" className={`bubble${toggle ? " open-bubble" : ""}`}>
            <p id="menu-title" onClick={() => setToggle(true)}>menú</p>
            <nav id="nav-menu">
                <ul id="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" href='/locales'>
                            <FontAwesomeIcon className="nav-icon" icon={faShop} />
                            <p className="nav-title">locales</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./#social-container'>
                            <FontAwesomeIcon className="nav-icon" icon={faHashtag} />
                            <p className="nav-title">redes</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./#services-container'>
                            <FontAwesomeIcon className="nav-icon" icon={faHandsHolding} />
                            <p className="nav-title">servicios</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='./#contact-container'>
                            <FontAwesomeIcon className="nav-icon" icon={faPhone} />
                            <p className="nav-title">contacto</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setToggle(false)}>
                            <FontAwesomeIcon id="close-bubble" className="nav-icon" icon={faXmark} />
                            <p className="nav-title">cerrar</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}