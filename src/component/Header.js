import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Picture from '../profile_picture.jpeg';
import { FaMapMarkedAlt, FaRegEnvelope, FaMobileAlt } from 'react-icons/fa';

function Header(props) {
    const font = { fontFamily: 'Calibri' };
    const primary = "text-primary";
    const headerDetails = {
        name: 'Himanshu Jain',
        job_profile: 'Java Developer',
        Job_desc: 'Professional Java Developer with more than seven years of experience in the web application development. Involved in design and development of new web based applications.',
        email: 'jain.himanshu1990@gmail.com',
        contact_number: '+91 9711681255',
        current_location: 'Noida, India'
    }

    return (
        <Row className="justify-content-md-center">
            <Col lg={4}>
                <h2 style={font}><b>{headerDetails.name}</b></h2>
                <h4 style={font} className={primary}>{headerDetails.job_profile}</h4>
                <p style={font}>{headerDetails.Job_desc}</p>
            </Col>
            <Col lg={3} className="text-md-center">
                <Image src={Picture} roundedCircle width="171px" height="180px" />
            </Col>
            <Col lg={3} style={font} className={`${primary} text-md-right`}>
                <h6>{headerDetails.email} <FaRegEnvelope /></h6>
                <h6>{headerDetails.contact_number} <FaMobileAlt /></h6>
                <h6>{headerDetails.current_location} <FaMapMarkedAlt /></h6>
            </Col>
        </Row>)
}
export default Header;