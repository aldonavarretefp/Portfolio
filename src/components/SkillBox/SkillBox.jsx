import  {useRef}from 'react'

import { motion } from "framer-motion";
import {Skills} from '../../data';

import "./skillbox.scss";

const SkillBox = () =>  {
    const constraintsRef = useRef(null);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    return (
            <div className="skillsbox">
                <motion.div className="drag-area" ref={constraintsRef} />
                {
                    Skills.map((skill,index) => {
                        return(
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                style={{backgroundImage:`url(${skill.url})`}}
                                drag
                                dragConstraints={constraintsRef}
                                transition={{ ease:"easeInOut",delay: 1,duration:2 }}
                            />
                        );
                    })
                }
            </div>
    );
}

export default SkillBox;