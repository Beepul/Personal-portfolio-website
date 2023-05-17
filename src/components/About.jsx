import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const About = () => {
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [ 0, 1 ], [ 0, -600 ]);
	return (
		<section id="about" className="about__sec d-flex flex-column justify-content-center">
			<p>
				I am a <span>Front End Developer</span> with a <span>strong</span> <br className="d-none d-md-block" />
				foundation in IT and a <span>specialization</span> in React JS. <br className="d-none d-md-block" />
				Possessing a passion for web development and <br className="d-none d-md-block" />
				a <span>commitment</span> to produce <span>high-quality work.</span>
			</p>
			<LinkContainer to={'/about'}>
				<NavLink className="d-flex align-items-center gap-2">
					Read More <i className="bi bi-arrow-right" />
				</NavLink>
			</LinkContainer>
			<motion.h1 style={{ x }}>About</motion.h1>
		</section>
	);
};

export default About;
