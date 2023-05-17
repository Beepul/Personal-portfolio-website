import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { profileTwo } from '../assets/images'
import {motion} from 'framer-motion';
import Skils from '../components/Skils';


const AboutPage = () => {
    const bio = {birth:"01.10.1998",age:'24',address:"Dhulikhel, Kavre", email: "beepulmagar@gmail.com", phone: "+977 9860863466"};
    const info={nationality:"Nepali", slc: "Nightingle Academy", plustwo:"VS Niketan", bachelor: "Apex College", interest: "Music and Sports", lan:"Nepali, Hindi, English"};
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
      <Container>
            <section className='about__page py-lg-5 pt-0 ' >
            <div className='img__con'>
            </div>
            <div className='py-4'>
                <div className='name pt-3'>
                    <h4>Beepul Thapa Magar</h4>
                    <p>Front-End Developer</p>
                </div>
                <div className='desc pt-4'>
                    <p>My name is Beepul Thapa Magar and I am a passionate IT enthusiast who has chosen to specialize in frontend development. I have completed my Bachelor's in Computer Information Systems, and I have also completed a certified frontend course to further develop my skills.</p>
                    <p>During my internship at ESR tech, I worked on the MERN stack, but I found myself enjoying frontend development more. In my free time, I enjoy exploring new technologies and experimenting with different frontend development tools and frameworks to stay up-to-date with the latest trends and best practices in the industry. I am determined to achieve my dream job, and I have been working hard to improve my knowledge and expertise in the field of frontend development.</p>
                    <p>With my passion and dedication, I am confident that I will make a positive impact in the industry.</p>
                </div>
            </div>
            <div className='info pt-2 pb-4 mb-4 mb-lg-0'>
            <Row>
                <Col lg={6}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Birthday:</td>
                                <td className='ps-5 ans'>{bio.birth}</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td className='ps-5 ans'>{bio.age}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td className='ps-5 ans'>{bio.address}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td className='ps-5 ans'>{bio.email}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td className='ps-5 ans'>{bio.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col lg={6}>
                <table>
                        <tbody>
                            <tr>
                                <td>Nationality:</td>
                                <td className='ps-5 ans'>{info.nationality}</td>
                            </tr>
                            <tr>
                                <td>SLC:</td>
                                <td className='ps-5 ans'>{info.slc}</td>
                            </tr>
                            <tr>
                                <td>+2 :</td>
                                <td className='ps-5 ans'>{info.plustwo}</td>
                            </tr>
                            <tr>
                                <td>Bachelor:</td>
                                <td className='ps-5 ans'>{info.bachelor}</td>
                            </tr>
                            <tr>
                                <td>Interest:</td>
                                <td className='ps-5 ans'>{info.interest}</td>
                            </tr>
                            <tr>
                                <td>Language:</td>
                                <td className='ps-5 ans'>{info.lan}</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            </div>
            <div className='skill__about pt-4 pt-lg-0'>
            <Skils />
            </div>
    </section>
        </Container>
    </motion.section>
  )
}

export default AboutPage