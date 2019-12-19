import React from 'react';
import EducationContainer from './EducationContainer';
import EducationList from '../../DataFiles/educationlist.json';

function Education(props) {

    return (
        <>
        <h1>Project Himanshu</h1>
        <EducationContainer educationList={EducationList} />
        </>
    );
}
export default Education;