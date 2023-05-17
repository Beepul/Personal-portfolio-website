import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'

const Experience = () => {
  const {scrollYProgress} = useScroll()
  const x = useTransform(scrollYProgress,[0,1],[0,-600]);
  return (
    <div className='experience__sec pt-5'>
      <div className='h-100 d-flex flex-column justify-content-center'>
      <h2 className='heading'>Work History</h2>
      <div className='history__con p-md-5 py-5 d-flex gap-sm-5 gap-4 ps-sm-0 ps-2'>
        <h3>01</h3>
        <div className='info__con'>
          <h4>Mern Stack Internship</h4>
          <p>ESR TECH - Lazinpat, Kathmandu</p>
          <ul>
            <li>Developed Mern Stack Applications</li>
            <li>Identified issues, analyzed informaiton and procided solution to problems</li>
            <li>Participated in team-building activities to enhance working relationships</li>
          </ul>
        </div>
      </div>
      </div>
      <motion.h1 style={{x:x}}>Experience</motion.h1>
    </div>
  )
}

export default Experience