import React from 'react';

function EducationElement(props) {

    return (
        <>
            <h5><b>{props.education.course}</b></h5>
            <h6>{props.education.institute}</h6>
            <h6 className="color">{props.education.year}</h6>
        </>
    );
}

export default EducationElement;