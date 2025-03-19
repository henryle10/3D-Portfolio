import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]'>
       My name is Henry Le, and I am a Frontend Developer and I am eager to continue absorbing knowledge in the world of programming and determined to improve my problem solving skills.

After completing the accelerated web development program at Coding Dojo, I have successfully earned my certificate while passing each exam with the highest possible grade. In addition, I have completed projects under my belt where I utilized all the skills I have learned. Now I am seeking potential opportunity to advance my proficiency and to move forward with my career while progressively challenging myself.
      </motion.p>

    </>
  )
}

export default SectionWrapper (About, "about")