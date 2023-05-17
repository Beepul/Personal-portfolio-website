import React, { useEffect } from 'react';
import { projects } from '../assets/data/data';
import hoverEffect from 'hover-effect';
import { overlay } from '../assets/images';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Project from './Project';

const Projects = () => {

 
  useEffect(()=> {
    Array.from(document.querySelectorAll('#project_item')).forEach((e)=>{
		const imgs = Array.from(e.querySelectorAll('img'));
		if(imgs[0] && imgs[1]){
			new hoverEffect({
				parent: e,
				intensity: 0.3,
				image1: imgs[0].getAttribute('src'),
				image2: imgs[1].getAttribute('src'),
				displacementImage: overlay
			})
		}
	})
  },[])
	return (
		<>
		<div className='project__sec' id='projects'>
		<div className="text-end py-lg-4 heading">
				<h2>Projects</h2>
				<p>Some of the highlighting projects out of my collection of projects</p>
			</div>
		<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
		{projects &&
					projects.map((project) => (
						<SwiperSlide  key={project.id}>
						<Project project={project}/>
        </SwiperSlide>
					))}
      </Swiper>
		</div>
		</>
		
	);
};

export default Projects;
