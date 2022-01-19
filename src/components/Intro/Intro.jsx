import { useEffect,useRef } from 'react';
import { init } from 'ityped';


import "./intro.scss";


export default function Intro() {
    const textRef = useRef();

    useEffect((params) => {
        init(textRef.current, { 
            showCursor: true, 
            backSpeed:  40,
            typeSpeed:  40,
            strings: ['happy to see you here!.','a software developer.','an athlete.', 'an enthusiastic.','a future software engineer.','a student.','an autodidact.' ] 
        });
    },[])


    return (
        <div className="intro" id="intro">
            
            <div className="center">
                <div className="wrapper">
                    <h2>Hi everybody! I'm</h2>
                    <h1>Aldo Navarrete,</h1>
                    <h3>and I am <code ref={textRef}></code></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-arrow.png" alt="Flecha_abajo" />
                </a>
            </div>
        </div>
    )
}
