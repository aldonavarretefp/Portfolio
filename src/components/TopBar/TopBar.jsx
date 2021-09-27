
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Sling as Hamburger } from 'hamburger-react'


import "./topBar.scss";


export default function TopBar({isOpen,setOpen}) {
    return (
        <div className={isOpen ? "topBar active" : "topBar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Aldo</a> 
                    <div className="itemContainer">
                        <EmailIcon className="icon"/>
                        <span>nazamaldoyael@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <WhatsAppIcon className="icon"/>
                        <span>55 78 59 07 24</span>
                    </div>
                    <div id="iconContainer" className="itemContainer">
                        <div id="icon">
                            <a  rel="noreferrer" target="_blank" href="https://github.com/aldonavarretefp">
                            <GitHubIcon className="icon"/>
                            </a>
                        </div>
                        <div id="icon">
                            <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/aldo-navarrete-zamora-756bb3200/">
                                <LinkedInIcon className="icon" id="linkedInIcon"/>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Right */}
                <div className="right">
                    <div className="hamburger">
                        <Hamburger 
                        toggled={isOpen} 
                        toggle={setOpen} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
