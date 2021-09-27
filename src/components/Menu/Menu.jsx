import "./menu.scss";


export default function Menu({isOpen,setOpen}) {
    
    return (
        <div className={isOpen?"menu active": "menu" } id="menu">
            <ul>
                <li><a onClick={()=>setOpen(false)} href="#intro"><span><span>
                    <p>Home</p>
                </span></span></a></li>
                <li><a onClick={()=>setOpen(false)} href="#portfolio"><span>
                    <p>Portfolio</p>
                </span></a></li>
                <li><a onClick={()=>setOpen(false)} href="#skills"><span>
                    <p>Skills</p>
                </span></a></li>
                {/* <li><a onClick={()=>setOpen(false)} href="#works"><span>
                    <p>Works</p>
                </span></a></li>
                <li><a onClick={()=>setOpen(false)} href="#testimonials"><span>
                    <p>Testimonials</p>
                </span></a></li> */}
                <li><a onClick={()=>setOpen(false)} href="#contact"><span>
                    <p>Contact</p>
                </span></a></li>
            </ul>
        </div>
    )
}
