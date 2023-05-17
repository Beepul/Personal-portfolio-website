import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Col, Row } from 'react-bootstrap';

const Skils = () => {
  return (
    <div className='skills__sec d-flex flex-column justify-content-center'>
        <div className=''>
            <h2>Skills</h2>
            <p>Tools / Languages that I mostly use</p>
            <Row>
                <Col lg={7}>
            <ul>
                <li><span>01</span>Html </li>
                <li> <span>02</span>CSS / SCSS / Bootstrap / Tailwind / Framer Motion</li>
                <li><span>03</span>Javascript </li>
                <li><span>04</span>React JS </li>
                

            </ul>
                </Col>
                <Col lg={5}>
            <ul>
            <li><span>05</span>Redux / Redux Toolkit </li>
                <li><span>06</span>Fire Base </li>
                <li><span>07</span>Node JS </li>
            <li><span>08</span>Figma / Photoshop</li>

            </ul>
                </Col>
            </Row>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Skils