import React, { Component } from 'react';
import DashBoardLeft from './Dashboard/DashBoardLeft';
import DashBoardRight from './Dashboard/DashBoardRight';
import { Container, Row, Col } from 'react-bootstrap';
import Switch, { Case } from 'react-switch-case';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkExperience from './workexperience/WorkExperience';
import Skills from './skills/Skills';
import Education from './education/Education';
import DashboardAboutMe from './Dashboard/DashboardAboutMe';
import { FaHome } from 'react-icons/fa';

class Resume extends Component {
    constructor() {
        super();
        this.state = { screen: "dashboard" };
        this.setEvent = this.setEvent.bind(this);
    }

    setEvent = (eventName) => {
        this.setState({ screen: eventName });
    };

    render() {
        return (
            <Container className="container-border">
                <br />
                <Row className="justify-content-md-center">
                    <Col lg={3}>
                        <DashBoardLeft event={this.setEvent} />
                    </Col>
                    <Col lg={9}>
                        <DashboardAboutMe />
                        <a href="/" onClick={() => this.setEvent("dashboard")} className="aright"><FaHome /></a>                        <br />
                        <Switch condition={this.state.screen}>
                            <Case value="dashboard"><DashBoardRight event={this.setEvent} /></Case>
                            <Case value="workexperience"><WorkExperience /></Case>
                            <Case value="skills"><Skills /></Case>
                            <Case value="education"><Education /></Case>
                        </Switch>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default Resume;