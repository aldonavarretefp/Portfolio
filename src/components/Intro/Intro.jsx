import { useEffect,useRef } from 'react';
import { init } from 'ityped';


import "./intro.scss";


export default function Intro() {
    const textRef = useRef();

    useEffect((params) => {
        init(textRef.current, { 
            showCursor: true, 
            backSpeed:  40,
            typeSpeed:  90,
            strings: ['Software Developer .','Athlete .', 'Enthusiastic .','future Software Engineer .' ] 
        });
    },[])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/IMG_0640 EDITED 2.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi everybody! I'm</h2>
                    <h1>Aldo Navarrete,</h1>
                    <h3>a simple <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-arrow.png" alt="Flecha_abajo" />
                </a>
            </div>
        </div>
    )
}
