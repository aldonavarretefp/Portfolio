import  {useRef}from 'react'

import { motion,  useViewportScroll} from "framer-motion";
import {Skills} from '../../data';

import "./skillbox.scss";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const SkillBox = () =>  {
    const constraintsRef = useRef(null);
    const { scrollYProgress } = useViewportScroll()
    
    return (
            <div className="skillsbox">
                <motion.div className="drag-area" ref={constraintsRef} />
                {
                    Skills.map((skill,index) => {
                        return(
                            <motion.div
                                key={index}
                                initial={
                                    {
                                        x: getRandomArbitrary(-100, 100),
                                        y: getRandomArbitrary(-100, 100),
                                    }
                                }
                                animate={
                                    {
                                        x: getRandomArbitrary(-100, 100),
                                        y: getRandomArbitrary(-100, 100),
                                        opacity: 1,
                                        translateX: getRandomArbitrary(-120, 120),
                                        transition:{
                                            repeat:Infinity,
                                            repeatType:"reverse",
                                            duration: 3,
                                        }
                                    }
                                }
                                style={{
                                    backgroundImage:`url(${skill.url})`,
                                    pathLength: scrollYProgress,
                                }}
                                drag
                                dragConstraints={constraintsRef}
                                whileHover={
                                    {
                                        scale: 1.2,
                                        transition: {
                                            duration: 0.1,
                                        },
                                    }
                                }
                                whileTap={
                                    {
                                        scale: 0.9,
                                        transition: {
                                            duration: 0.1,
                                        },
                                        
                                    }
                                }
                            />
                        );
                    })
                }
            </div>
    );
}

export default SkillBox;