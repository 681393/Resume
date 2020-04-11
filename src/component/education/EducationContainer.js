import React from 'react';
import EducationElement from './EducationElement';
import { FaGraduationCap } from 'react-icons/fa';

function EducationContainer(props) {
    const educationList = props.educationList.map(education => <><EducationElement education={education} /> <br /></>);
    return (
        <div>
            <h4>EDUCATION <FaGraduationCap /></h4>
            <hr />
            {educationList}
            <br />
        </div>
    );
}

export default EducationContainer;