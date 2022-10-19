
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import { Sling as Hamburger } from 'hamburger-react'


import "./topBar.scss";


export default function TopBar({isOpen,setOpen}) {
    
    return (
        <div className={isOpen ? "topBar active" : "topBar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Aldo <code>Navarrete</code> </a>
                    <a href="/files/aldonavarrete-resume.pdf" target="_blank" rel='noopener noreferrer' ><span>CV</span></a>
                    <div className="itemContainer">
                        <a href="../files/aldonavarrete-resume.pdf" without target="_blank" rel='noopener noreferrer' >
                            <DescriptionIcon className="icon" />
                        </a>
                    </div>
                    <span>Let's connect !</span>
                    <div className="itemContainer">
                        <a 
                            href="mailto:nazamaldoyael@gmail.com?subject=Contact%20for%20Information.&body=Hello Aldo!%20I%20contacted%20you%20to%20ask%20for%20your%20development%20service!%20:)"
                        >
                            <EmailIcon className="icon"/>
                        </a>
                        {/* <span><a href="mailto:nazamaldoyael@gmail.com?subject=Contact%20for%20Information.&body=Hello Aldo!%20I%20contacted%20you%20to%20ask%20for%20your%20development%20service!%20:)">nazamaldoyael@gmail.com</a></span> */}
                    </div>
                    <div className="itemContainer">
                        <a href="https://wa.link/ty2y5a" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon className="icon"/>
                        </a>
                        {/* <span><a href="https://wa.link/ty2y5a" target="_blank" rel="noopener noreferrer">55 78 59 07 24</a></span> */}
                    </div>
                    <div className="itemContainer">
                            <a  rel="noreferrer" target="_blank" href="https://github.com/aldonavarretefp">
                            <GitHubIcon className="icon"/>
                            </a>
                    </div>
                            <div className="itemContainer">
                                <a  rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/aldo-navarrete-zamora-756bb3200/">
                                    <LinkedInIcon className="icon" id="linkedInIcon"/>
                                </a>
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
