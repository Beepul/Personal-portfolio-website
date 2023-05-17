import React from 'react';
import { netify, profile } from '../assets/images';
import useSplitWords from '../hooks/useSplitWords';
import { motion } from 'framer-motion';
import { Col, NavLink, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const container = {
	animate: {
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.1
		}
	}
};

const listItem = {
	initial: { y: 400 },
	animate: {
		y: 0,
		transition: {
			ease: [ 0.6, 0.01, -0.05, 0.95 ],
			duration: 1.8,
			when: 'afterChildren'
		}
	}
};

const leftReveal = {
	initial: { x: -700 },
	animate: {
		x: 0,
		transition: {
			duration: 1
		}
	}
};
const rightReveal = {
	initial: { x: 700 },
	animate: {
		x: 0,
		transition: {
			ease: [ 0.6, 0.01, -0.05, 0.95 ],
			duration: 1.8,
			delay: 0.8
		}
	}
};

const Hero = () => {
	const hi = useSplitWords('HI THERE 👋, I’M');
	const name = 'Beepul Thapa Magar';
	const title = 'Front End Developer';

	return (
		<Row>
			<Col xxl={6} lg={7} className='order-2 order-lg-1'>
				<div className="hero__sec d-flex flex-column justify-content-center">
					<motion.div className='text-center text-lg-start' variants={container} initial="initial" animate="animate">
						<motion.h6 variants={leftReveal}>
							{hi && hi.map((hey, index) => <span key={index}>{hey}</span>)}
						</motion.h6>

						<motion.span className="d-flex justify-content-lg-start justify-content-center name" variants={container} initial="initial" animate="animate">
							{[ ...name ].map((letter,index) => (
								<motion.h2 style={{ whiteSpace: 'pre-wrap' }} variants={listItem} key={index}>
									{letter}
								</motion.h2>
							))}
						</motion.span>
						<motion.span className="d-flex justify-content-lg-start justify-content-center title" variants={leftReveal}>
							{[ ...title ].map((letter,index) => (
								<motion.p className=" mb-2" style={{ whiteSpace: 'pre-wrap' }} key={index}>
									{letter}
								</motion.p>
							))}
						</motion.span>
						<motion.div variants={leftReveal}>
							<p className="mb-3">
								I'm a design minded front-end developer<br className='d-none d-sm-block'/> based in Dhulikhel, Nepal
							</p>
							<ul className="d-flex gap-5 align-items-center justify-content-center justify-content-lg-start mb-sm-5 mb-4">
								<li>
									<a href="https://github.com/Beepul" target="_blank">
										<i className="bi bi-github" />
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/beepul-magar-b8550821a/" target="_blank">
										<i className="bi bi-linkedin" />
									</a>
								</li>
								<li>
									<a href="mailto:beepulmagar@gmail.com">
										<i className="bi bi-envelope-at" />
									</a>
								</li>
							</ul>
							<div className="button__con mb-5 d-flex justify-content-center gap-5  justify-content-lg-start gap-lg-5">
								<a href="#contact">Lets Talk</a>
								<LinkContainer to={'/project'}>
									<NavLink>Projects</NavLink>
								</LinkContainer>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ y: 500, rotate: 90 }}
						animate={{ y: 0, rotate: 90 }}
						transition={{ duration: 2, delay: 1.9 }}
						className="scroll d-flex align-items-end justify-content-between"
					>
						<a href="#about" className="d-flex justify-content-between">
							<p>scroll down</p>
							<i className="bi bi-arrow-bar-right" />
						</a>
					</motion.div>
				</div>
			</Col>
			<Col xxl={6} lg={5} className='order-1 order-lg-2'>
				<motion.div
					variants={rightReveal}
					initial="initial"
					animate="animate"
					className="profile__con d-flex justify-content-lg-end justify-content-center align-items-center h-100"
				>
					<div className="img__con"></div>
				</motion.div>
			</Col>
		</Row>
	);
};

export default Hero;
