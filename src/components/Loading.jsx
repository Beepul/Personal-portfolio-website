import React from 'react'
import { whiteLogo } from '../assets/images'
import { motion } from 'framer-motion'

const parent = {
    initial:{
        opacity: 0
    },
    animate :{
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const child = {
    initial: {
        y: 100
    },
    animate: {
        y:-100,
        transition: {
            duration: 4
        }
    }
}
const slide = {
    initial: {
        x: 100
    },
    animate: {
        x:0,
        transition: {
            duration:0.6
        }
    }
}
const Loading = () => {

  return (
    <motion.div initial={{y:0}} animate={{y: "-100vh"}} transition={{duration:1, delay:4.8}} className='loading__sec'>
        <motion.div variants={parent} initial="initial" animate="animate" className="d-flex align-items-center gap-3">
            <motion.div variants={slide} className='logo'>
                <img src={whiteLogo} alt="bipul" />
            </motion.div>
            <motion.ul >
                <motion.li variants={child}>HTML</motion.li>
                <motion.li variants={child}>CSS / SCSS</motion.li>
                <motion.li variants={child} >JavaScript</motion.li>
                <motion.li variants={child} >React JS</motion.li>
            </motion.ul>
        </motion.div>
    </motion.div>
  )
}

export default Loading