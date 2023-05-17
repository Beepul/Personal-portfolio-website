import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Home from './page/Home';
import { gsap } from 'gsap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './page/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import ProjectPage from './page/ProjectPage';
import GoToTop from './components/GoToTop';
import Loading from './components/Loading';

const Circle = forwardRef(({ size, delay }, ref) => {
	const el = useRef();
	useImperativeHandle(
		ref,
		() => {
			return {
				moveTo(x, y) {
					gsap.to(el.current, { x, y, delay });
				}
			};
		},
		[ delay ]
	);

	return <div className={`ball d-lg-block d-none ${size}`} ref={el} />;
});

const App = () => {
	const [loading, setLoading] = useState(true);
	const circleRefs = useRef([]);
	circleRefs.current = [];

	useEffect(() => {
		const { innerWidth, innerHeight } = window;
		circleRefs.current.forEach((ref) => ref.moveTo(innerWidth / 2, innerHeight / 2));

		const onMove = ({ clientX, clientY }) => {
			circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
		};

		window.addEventListener('pointermove', onMove);

		return () => {
			window.removeEventListener('pointermove', onMove);
		}
	}, []);
	
	const addCircleRef = (ref) => {
		if (ref) {
			circleRefs.current.push(ref);
		}
	};
	

	useEffect(()=>{
		setLoading(true);
		const timeout = setTimeout(()=>{
			setLoading(false);
		},5500);
		return () => clearTimeout(timeout)
	},[])
	return (
		<>
		{
			loading ? <Loading /> :
		<div>
			<BrowserRouter>
			<div>
				<Container className='app__con'>
					<Header />
				</Container>
			</div>
				<ScrollToTop />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/project" element={<ProjectPage />} />
					</Routes>
				<Footer />
			</BrowserRouter>
			<Circle size={'ball-sm'} ref={addCircleRef} delay={0} />
			<Circle size={'ball-md'} ref={addCircleRef} delay={0.1} />
			<Circle size={'ball-lg'} ref={addCircleRef} delay={0.2} />
			<GoToTop />
		</div>
		}
		</>
	);
};

export default App;
