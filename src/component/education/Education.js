import React from 'react';
import EducationContainer from './EducationContainer';

function Education(props) {

    const EducationList = [
        {
            "course": "M.Sc. Electronics",
            "institute": "Jamia Millia Islamia, New Delhi",
            "year": "2010 - 2012"
        },
        {
            "course": "B.Sc. (Hons) Electronics",
            "institute": "Sri Aurobindo College (DU), New Delhi",
            "year": "2007 - 2010"
        },
        {
            "course": "Senior Secondary Examination",
            "institute": "Nutan Vidya Mandir, Delhi",
            "year": "2006 - 2007"
        },
        {
            "course": "Secondary School Examination",
            "institute": "Nutan Vidya Mandir, Delhi",
            "year": "2004 - 2005"
        }
    ];

    return (
        <EducationContainer educationList={EducationList} />
    );
}
export default Education;