import React from 'react';
import { Container } from 'react-bootstrap';
import EducationElement from './EducationElement';

function EducationContainer(props) {
    const educationList = props.educationList.map(education => <EducationElement education={education} />);
    return (
        <Container>
            {educationList}
        </Container>
    );
}

export default EducationContainer;