import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faGithub, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            Blog Website
        </h4>
        <p className="text-center">Find us on social media</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                        <FontAwesomeIcon icon={faFacebook} className="fa-2x"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                        <FontAwesomeIcon icon={faInstagram} className="fa-2x"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="github">
                        <FontAwesomeIcon icon={faGithub} className="fa-2x"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="pinterest">
                        <FontAwesomeIcon icon={faPinterest} className="fa-2x"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                        <FontAwesomeIcon icon={faTwitter} className="fa-2x"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer
