import React, { Component } from 'react';
import PersonalDetails from './personaldetails/PersonalDetails';
import Skills from './skills/Skills';
import WorkExperience from './workexperience/WorkExperience';
import Header from './Header';
import Menu from './menu/Menu';
import DashBoard from './DashBoard';
import Education from './education/Education';
import { Container, Row, Col } from 'react-bootstrap';
import Switch, { Case } from 'react-switch-case';
import 'bootstrap/dist/css/bootstrap.min.css';



class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 'dashboard'
        }
        this.setEvent = this.setEvent.bind(this);
    }

    setEvent(eventName) {
        console.log(eventName);
        this.setState({ activeKey: eventName });

    }
    render() {
        return (
            <Container>
                <br />
                <Header />
                <hr />
                <Row className="justify-content-md-center">
                    <Col lg={3}>
                        <Menu event={this.setEvent} activeKey={this.state.activeKey} />
                    </Col>
                    <Col lg={7}>
                        <Switch condition={this.state.activeKey}>
                            <Case value="dashboard">
                                <DashBoard />
                            </Case>
                            <Case value="workexperience">
                                <WorkExperience />
                            </Case>
                            <Case value="skills">
                                <Skills />
                            </Case>
                            <Case value="education">
                                <Education />
                            </Case>
                            <Case value="personaldetails">
                                <PersonalDetails />
                            </Case>
                        </Switch>
                    </Col>
                </Row>
            </Container >
        );
    }
}
export default Resume;