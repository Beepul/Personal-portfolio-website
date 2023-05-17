import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skils from '../components/Skils'
import Contact from '../components/Contact'
import useWindowSize from '../hooks/useWindowSize'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const parentVariants = {
  initial:{opacity:0},
  animate:{
    opacity:1,
    transition:{
      duration:2,
      delayChildren: 0.8,
    }
  }
}
const childVariants = {
  initial:{
    y: "100vh",
    rotate: 90
  },
  animate:{
    y:0,
    rotate: 90,
    transition:{
      duration: 2,
      delay:1.9
    }
  }
}
const Home = () => {

  // useEffect(()=>{

  //   var skewSetter = gsap.quickSetter('.body__con', "skewY", "deg");
  //   let proxy = {skew:0}
  //   const clamp = gsap.utils.clamp(-20, 20);
  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.create({
  //     onUpdate: self => {
  //       let skew = clamp(self.getVelocity() / -300);
  //       if(Math.abs(skew) > Math.abs(proxy.skew)){
  //         proxy.skew = skew;
  //         gsap.to(proxy,{skew:0, duration:0.8, ease:"power3", overwrite:true, onUpdate:()=>skewSetter(proxy.skew)})
  //       }
  //     }
  //   });
    
  // },[])

  const {scrollYProgress} = useScroll()
  const y = useTransform(scrollYProgress,[0,1],[0,-2000]);

  return (
    <motion.main variants={parentVariants} initial="initial" animate="animate" className='app'>
        <Container className='app__con'>
            <section className='body__con'>
            <Hero />
            <About />
            <Projects />
             <Experience />
             <Skils />
            <Contact />
            <motion.h1 variants={childVariants} style={{y}} className='intros parallax d-none d-sm-block' >Intros</motion.h1>
            <motion.h1 variants={childVariants} style={{y}} className='works parallax d-none d-sm-block'>Works</motion.h1>
            </section>
        </Container>
    </motion.main>
  )
}

export default Home