import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSnapchat, faTwitterSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Social(){
    return(
        <div id="social-container">
            <h3 id="social-title">redes sociales</h3>
            <ul id="social-list">
                <li className="social-item"><FontAwesomeIcon className='social-icon' icon={faSquareFacebook} /></li>
                <li className="social-item"><FontAwesomeIcon className='social-icon' icon={faTwitterSquare} /></li>
                <li className="social-item"><FontAwesomeIcon className='social-icon' icon={faInstagram} /></li>
                <li className="social-item"><FontAwesomeIcon className='social-icon' icon={faYoutube} /></li>
                <li className="social-item"><FontAwesomeIcon className='social-icon' icon={faSnapchat} /></li>
            </ul>
        </div>
    )
}