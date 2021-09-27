
import { motion } from "framer-motion"; 
import SkillBox from './../SkillBox/SkillBox';


import "./skills.scss";


const Skills = () =>  {

    return (
            <div className="skills" id="skills" >
                <div className="left">
                    <h2>Here are my <span>skills</span>  and more technology I am familiar with .</h2>
                    <h2>By the way, you can grab them and play with them.</h2>
                </div>
                <div className="right">
                    <SkillBox/>
                </div>
            </div>
    );
}

export default Skills;