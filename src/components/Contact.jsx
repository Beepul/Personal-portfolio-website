import React, { useRef, useState } from 'react';
import { netify } from '../assets/images';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import MyModal from './MyModal';

const initialState = {
	user_name: '',
	user_email: '',
	message: ''
};

const Contact = () => {
	const [ data, setData ] = useState(initialState);
	const [ loading, setLoading ] = useState(false);
	const [ sucess, setSucess ] = useState(false);
	const [ errors, setErrors ] = useState({});
	const [ modalShow, setModalShow ] = useState(false);
	const { user_name, user_email, message } = data;

	const form = useRef();

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const validate = () => {
		let errors = {};
		if ((!user_name, !user_email, !message)) {
			errors.mess = 'Opps! Looks like you missed something 🤭 ';
		}
		return errors;
	};

	const sendEmail = (e) => {
		e.preventDefault();
		let error = validate();
		if (Object.keys(error).length) {
			setErrors(error);
		} else {
			try {
				setLoading(true);
				emailjs.sendForm('service_rt6q6vo', 'template_ajsbsik', form.current, 'TntTuMDzk77i0Dn28').then(
					(result) => {
						setData(initialState);
						setSucess(true);
						setLoading(false);
						setErrors({});
						setModalShow(true);
						setTimeout(() => {
							setModalShow(false);
						}, 3000);
					},
					(error) => {
						setErrors({ ...errors, serverError: error.text });
						setLoading(false);
					}
				);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<Row id="contact" className="py-5">
			<Col xl={7} className="col-12">
				<div className="contact__sec py-5">
					<div className="upper__text">
						<h2>Look Who's Here 😁</h2>
						<p className="pt-4 msg">
							Thanks for stopping by, I’m currently looking to join a new team of creative designers and
							developers. If you think we might be a good fit for one another, give me a{' '}
							<a href="tel:+977-98-60863466">call 🤙 </a> or send me an{' '}
							<a href="mailto:beepulmagar@gmail.com">email 📧</a>.
						</p>
					</div>
					<div className="lower__text pt-5">
						<h2>Dont be a stranger. Let's talk 🤝 </h2>
						<div>
							<p>Connect with me online</p>
							<ul className="d-md-flex gap-5 align-items-center mt-4">
								<li>
									<a href="https://github.com/Beepul" target="_blank">
										<i className="bi bi-github" /> Github
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/beepul-magar-b8550821a/" target="_blank">
										<i className="bi bi-linkedin" />linkedin
									</a>
								</li>
								<li>
									<a href="mailto:beepulmagar@gmail.com">
										<i className="bi bi-envelope-at" />beepulmagar@gmail.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Col>
			<Col xl={5} className="col-12">
				<div className="form__sec py-5 px-4">
					<div className="mb-5 text-start text-xl-center">
						<h2>Leave a message 💛 </h2>
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<FloatingLabel className="mb-4" controlId="floatingText" label="Your Name">
							<Form.Control
								type="text"
								placeholder="Your Name"
								name="user_name"
								onChange={handleChange}
								value={user_name}
							/>
						</FloatingLabel>
						<FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
							<Form.Control
								type="email"
								placeholder="Email"
								name="user_email"
								value={user_email}
								onChange={handleChange}
							/>
						</FloatingLabel>
						<FloatingLabel controlId="floatingTextarea2" label="Message" className={`${errors && 'mb-4'}`}>
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{ height: '100px' }}
								name="message"
								onChange={handleChange}
								value={message}
							/>
						</FloatingLabel>
						<div className="w-100 text-center">
							<Form.Text className="text-muted">
								{errors.mess ? errors.mess : errors.serverError ? errors.serverError : null}
							</Form.Text>
						</div>
						<div className="btn__con d-flex justify-content-center align-content-center py-4">
							<button type="submit" value="Send" disabled={loading ? true : false}>
								Send
							</button>
							<MyModal show={modalShow} onHide={() => setModalShow(false)} />
						</div>
					</form>
				</div>
			</Col>
		</Row>
	);
};

export default Contact;
