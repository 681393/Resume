import React from 'react';
import EducationContainer from './EducationContainer';
import { education } from '../../data/education';

function Education(props) {

    return (
        <EducationContainer educationList={education} />
    );
}
export default Education;