import React from 'react';

function EducationElement(props) {

    const pSmall = { fontSize: '15px', fontFamily: 'Calibri' };
    const primary = "text-primary";
    const font = { fontFamily: 'Calibri' };
    return (
        <>
            <h6><b>{props.education.course}</b></h6>
            <h6>{props.education.institute}</h6>
            <p style={pSmall} className={primary}><i>{props.education.year}</i></p>
            <br />
        </>
    );
}

export default EducationElement;