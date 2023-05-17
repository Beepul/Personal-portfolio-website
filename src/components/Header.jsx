import React, { useEffect, useState } from 'react';
import { whiteLogo } from '../assets/images';
import { Col, NavLink, Offcanvas, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const [ show, setShow ] = useState(false);

	const navigate = useNavigate();
	const path = useLocation();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow((prev) => !prev);

	useEffect(() => {
		const contactLink = document.getElementById('contact-link');
		if (contactLink) {
			contactLink.addEventListener('click', scrollToContactForm);
		}
		return () => {
			if (contactLink) {
				contactLink.removeEventListener('click', scrollToContactForm);
			}
		};
	}, []);
	const scrollToContactForm = (e) => {
		e.preventDefault();
		navigate('/');
		const contact = document.getElementById('contact');
		if (contact) {
			contact.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollContact = () => {
		setShow(prev => !prev);
		navigate('/');
		setTimeout(()=>{
				const contact = document.getElementById('contact');
				if(contact){
					contact.scrollIntoView({ behavior: 'smooth' });
				}
		},1000)
	}

	return (
		<motion.section initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1.8 }} className="header__sec">
			<Row>
				<Col lg={3} sm={11} className="col-10">
					<div>
						<LinkContainer to={'/'}>
							<NavLink className="d-flex align-items-end gap-2">
								<div className="logo__con">
									<img className="w-100" src={whiteLogo} alt="logo" />
								</div>
								<h6>bipul</h6>
							</NavLink>
						</LinkContainer>
					</div>
				</Col>
				<Col lg={9} sm={1} className="col-2">
					<div className="h-100 d-lg-flex d-none align-items-center justify-content-end">
						<ul className="d-flex align-items-center justify-content-end gap-5">
							<li>
								<LinkContainer to={'/'}>
									<NavLink>Home</NavLink>
								</LinkContainer>
							</li>
							<li>
								<LinkContainer to={'/about'}>
									<NavLink>About</NavLink>
								</LinkContainer>
							</li>
							<li>
								<LinkContainer to={'/project'}>
									<NavLink>Projects</NavLink>
								</LinkContainer>
							</li>
							<li onClick={scrollToContactForm}>
								<NavLink id="contact-link">Contact</NavLink>
							</li>
						</ul>
					</div>
					<div
						className="bars d-flex flex-column align-items-end justify-content-between py-2 d-lg-none text-end"
						onClick={handleShow}
					>
						<motion.div
							initial={{ rotate: 0 }}
							animate={{ rotate: show ? 45 : 0, translateY: show ? 3 : 0 }}
							transition={{ duration: 0.6 }}
							className="line first"
						/>
						<motion.div
							initial={{ rotate: 0 }}
							animate={{ rotate: show ? -45 : 0, translateY: show ? -12 : 0 }}
							transition={{ duration: 0.6 }}
							className="line second"
						/>
					</div>
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header>
							<Offcanvas.Title className="d-flex w-100 align-items-center justify-content-between">
								<LinkContainer to={'/'}>
									<NavLink className="d-flex align-items-end gap-2">
										<div className="logo__con">
											<img className="w-100" src={whiteLogo} alt="logo" />
										</div>
										<h6>bipul</h6>
									</NavLink>
								</LinkContainer>
								<div
									className="bars d-flex flex-column justify-content-between py-2 d-lg-none text-end"
									onClick={handleShow}
								>
									<motion.div
										initial={{ rotate: 0 }}
										animate={{ rotate: show ? 45 : 0, translateY: show ? 5 : 0 }}
										transition={{ duration: 0.6 }}
										className="line first"
									/>
									<motion.div
										initial={{ rotate: 0 }}
										animate={{ rotate: show ? -45 : 0, translateY: show ? 2 : 0 }}
										transition={{ duration: 0.6 }}
										className="line second"
									/>
								</div>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body className="d-flex flex-column justify-content-between">
							<div className="nav__con pt-4">
								<ul className="d-flex flex-column gap-4">
									<li onClick={() => setShow(!show)}>
										<LinkContainer to={'/'}>
											<NavLink>Home</NavLink>
										</LinkContainer>
									</li>
									<li onClick={() => setShow(!show)}>
										<LinkContainer to={'/about'}>
											<NavLink>About</NavLink>
										</LinkContainer>
									</li>
									<li onClick={() => setShow(!show)}>
										<LinkContainer to={'/project'}>
											<NavLink>Projects</NavLink>
										</LinkContainer>
									</li>
									<li onClick={scrollContact}>
										<NavLink>Contact</NavLink>
									</li>
								</ul>
							</div>
							<div className="offcanvas__footer d-flex flex-wrap align-items-center justify-content-between">
								<ul className="d-flex gap-5 align-items-center py-3">
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
								<p>#front_end_developer</p>
							</div>
						</Offcanvas.Body>
					</Offcanvas>
				</Col>
			</Row>
		</motion.section>
	);
};

export default Header;
