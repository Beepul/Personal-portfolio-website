import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { whiteLogo } from '../assets/images'

const Footer = () => {
  return (
    <div className='footer__sec py-3'>
        <Container>
            <Row>
                <Col lg={6} className='col-9'>
                    <div className='logo__con d-flex align-items-center gap-3'>
                        <img src={whiteLogo} alt="logo" />
                        <p>Design & Develop</p>
                    </div>
                </Col>
                <Col lg={6} className='col-3 d-flex justify-content-end align-items-center'>
                    <p>#_front_end_developer</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer