import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GoToTop = () => {
    const [ isVisible, setIsVisible ] = useState(false);
	const goToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};

	const handleScroll = () => {
		let height = 300;
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > height) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
  return (
    <>
    {isVisible && (
			<motion.div 
			initial={{y:0, opacity:0.4}} 
			animate={{y:-10,opacity:1}} 
			transition={{ease: 'linear', duration:1.8, repeat:Infinity, repeatType: 'reverse'}} 
			className='scrollTop' 
			onClick={goToTop}>
				<i className="bi bi-arrow-up-short"></i>	
			</motion.div>
    )}
    </>
  )
}

export default GoToTop