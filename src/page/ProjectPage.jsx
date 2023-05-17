import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import Project from '../components/Project';
import { projects } from '../assets/data/data';
import hoverEffect from 'hover-effect';
import { overlay } from '../assets/images/index';

const ProjectPage = () => {
	useEffect(() => {
		Array.from(document.querySelectorAll('#project_item')).forEach((e) => {
			const imgs = Array.from(e.querySelectorAll('img'));
			if (imgs[0] && imgs[1]) {
				new hoverEffect({
					parent: e,
					intensity: 0.3,
					image1: imgs[0].getAttribute('src'),
					image2: imgs[1].getAttribute('src'),
					displacementImage: overlay
				});
			}
		});
	}, []);
	return (
		<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
			<Container className="pt-5">
				<section className="project__page py-5">
					{projects &&
						projects.map((project,index) => (
							<div className="single__project" key={index}>
								<Project project={project} />
								<div className="number">
									<h2>{project.no}</h2>
								</div>
							</div>
						))}
				</section>
			</Container>
		</motion.section>
	);
};

export default ProjectPage;
