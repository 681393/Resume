import React from 'react';
import EducationContainer from './EducationContainer';
import EducationList from '../../DataFiles/educationlist.json';

function Education(props) {

    return (
        <EducationContainer educationList={EducationList} />
    );
}
export default Education;