
import { useState, useEffect } from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


import PortfolioList from "../PortfolioList/PortfolioList";
import {FrontendPortfolio,BackendPortfolio} from "../../data";

import "./portfolio.scss"; 


export default function Portfolio() {

    const [selected, setSelected] = useState("back-end"); //Por id bb
    const [data, setData] = useState([]);

    useEffect(() => {
        switch(selected){
            case "front-end":
                setData(FrontendPortfolio);
                break;
            case "back-end":
                setData(BackendPortfolio);
                break;
            default:
                break;
        }
    },[selected]);

    const list = [
        {
            id:'front-end',
            title:"Front-End"
        },
        {
            id:'back-end',
            title:"Back-End"
        }
    ];


    return (
        <div className="portfolio" id="portfolio">
            <h1>
                Portfolio
            </h1>
            <ul>
                {
                    list.map((item) => (
                        <PortfolioList 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        isActive={selected === item.id} 
                        setSelected={setSelected}
                        />
                    ))
                }
                
            </ul>
            <div className="container">
                {
                    data.map((eachProject) => {
                        return(
                            <div
                            key={eachProject.id} 
                            className="item">
                                <img 
                                    src={eachProject.img}
                                    alt={"project"+eachProject.id}
                                />
                                <h3>{eachProject.title}</h3>
                                <p>{eachProject.description}</p>
                                <div className="links">
                                    <a  rel="noreferrer" target="_blank" href={eachProject.githubLink}>
                                    <GitHubIcon className="icon"/>
                                    </a>
                                    <a  rel="noreferrer" target="_blank" href={eachProject.weblink}>
                                    <LanguageIcon className="icon" id="webIcon"/>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            
            
        </div>
    )
}
