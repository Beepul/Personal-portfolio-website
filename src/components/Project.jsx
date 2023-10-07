import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Project = ({ project }) => {
	return (
		<div>
			<Row className="item py-5 pb-md-5 pb-0">
				<Col lg={6}>
					<div className="img__con" id="project_item">
						{project.img.map((image, index) => <img key={index} src={image} alt="project.name" />)}
					</div>
				</Col>
				<Col lg={6}>
					<div className="text__con p-3 pt-5 pb-5 ">
						<h4>{project.name}</h4>
						<p className="desc">{project.desc}</p>
						<p>
							Tech: <span>{project.tech}</span>
						</p>
						{project.warn && <span className='project-warn'>{project.warn}</span> }
						<div className="button__con d-flex flex-lg-column gap-lg-5 gap-md-3 gap-5 gap flex-md-row flex-column mt-5">
							<a href={project.link} target="_blank">
								View Live
							</a>
							<a href={project.source} target="_blank">
								Source Code
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Project;
