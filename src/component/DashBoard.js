import React from 'react';
import { Row, Col, Container, Badge } from 'react-bootstrap';
import { FaAward, FaGraduationCap, FaLanguage, FaUserMd, FaUserTie, FaRegClipboard, FaCode } from 'react-icons/fa';

function DashBoard(props) {

    const font = { fontFamily: 'Calibri' };

    return (
        <div style={font}>
            <Row>
                <Col lg={6}>
                    <h5><b>CURRENT PROJECT</b> <FaRegClipboard /></h5>
                    <h6><b>Unemployment Insurance</b></h6>
                    <p>Connecticut Department Of Labor</p>
                </Col>
                <Col lg={6}>
                    <h5><b>LANGUAGES</b> <FaLanguage /></h5>
                    <h6>English</h6>
                    <h6> Hindi</h6>
                </Col>
            </Row>
            <br />
            <Row>
                <Col lg={6}>
                    <h5><b>CURRENT EMPLOYER</b> <FaUserTie /></h5>
                    <h6>Tata Consultancy Services</h6>
                </Col>
                <Col lg={6}>
                    <h5><b>HIGHER QUALIFICATION</b> <FaGraduationCap /></h5>
                    <h6>M.Sc. in Electronics</h6>
                </Col>
            </Row>
            <br />
            <Row>
                <Col lg={6}>
                    <h5><b>MAJOR SKILLS</b> <FaCode /></h5>
                    <h6>Java</h6>
                    <h6>Hibernate</h6>
                    <h6>Spring</h6>
                    <h6>Struts</h6>
                    <h6>React JS</h6>
                    <h6>React Native</h6>
                </Col>
                <Col lg={6}>
                    <h5><b>AWARDS</b> <FaAward /></h5>
                    <h6>On The Spot Award <Badge variant='danger' pill>5</Badge></h6>
                    <h6>Service Commitment Award <Badge variant='danger' pill>2</Badge></h6>
                    <h6>Best Team Award <Badge variant='danger' pill>1</Badge></h6>
                    <h6>CLP Faculty Award <Badge variant="danger" pill>1</Badge></h6>
                </Col>
            </Row>
        </div>
    );
}
export default DashBoard;