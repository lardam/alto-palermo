import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSnapchat, faTwitterSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Social(){
    return(
        <div id="social-container">
            <h3 id="social-title">redes sociales</h3>
            <ul id="social-list">
                <Link target='_blank' href="https://www.facebook.com/Alto.Palermo/"><li className="social-item"><FontAwesomeIcon className='social-icon' icon={faSquareFacebook} /></li></Link>
                <Link target='_blank' href="https://twitter.com/Alto_Palermo/"><li className="social-item"><FontAwesomeIcon className='social-icon' icon={faTwitterSquare} /></li></Link>
                <Link target='_blank' href="https://www.instagram.com/alto_palermo/"><li className="social-item"><FontAwesomeIcon className='social-icon' icon={faInstagram} /></li></Link>
                <Link target='_blank' href="https://snapchat.com/add/alto_palermo/"><li className="social-item"><FontAwesomeIcon className='social-icon' icon={faYoutube} /></li></Link>
                <Link target='_blank' href="https://www.youtube.com/user/AltoPalermoShopping/"><li className="social-item"><FontAwesomeIcon className='social-icon' icon={faSnapchat} /></li></Link>
            </ul>
        </div>
    )
}