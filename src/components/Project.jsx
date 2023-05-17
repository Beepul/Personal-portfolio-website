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
					<div className="text__con p-md-5 p-3 pe-0 ps-md-5 ps-0">
						<h4>{project.name}</h4>
						<p className="desc">{project.desc}</p>
						<p>
							Tech: <span>{project.tech}</span>
						</p>
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
