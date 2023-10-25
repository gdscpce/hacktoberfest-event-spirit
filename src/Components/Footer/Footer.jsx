import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.linkedin.com/company/google-developer-student-clubs-pce/about/" target="_blank" rel="noopener noreferrer">
                        <img src="\src\Components\Footer\assets\icons8-linkedin.svg" alt="linkdin Icon" />
                    </a>
                    <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
                        <img src="src\Components\Footer\assets\icons8-twitter.svg" alt="Twitter Icon" />
                    </a>
                    <a href="https://www.instagram.com/pillaiscollege/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="src\Components\Footer\assets\icons8-instagram (1).svg" alt="Instagram Icon" />
                    </a>
                </div>
                <nav className="footer-menu">
                    <ul>
                        {/* <li><a href="#" className='footer-menu-head'>Navigation-links</a></li> */}
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#">Create an Event </a></li>
                    </ul>
                    <ul>
                        {/* <li><a href="#" className='footer-menu-head'>Legal</a></li> */}
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="/about">Logo</a></li>
                        <li><a href="#">Copyright </a></li>
                    </ul>
                </nav>
                {/* <nav className="footer-menu">
                    
                </nav> */}
            </div>
        </footer>
    );
}

export default Footer;


