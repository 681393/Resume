import React from 'react';
import { FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';
import EducationElement from '../education/EducationElement';
import { education } from '../../data/education';

function DashboardEducation(props) {

    return (
        <div>
            <h4>EDUCATION <FaGraduationCap /></h4>
            <hr />
            <EducationElement education={education[0]} />
            <a href="#" onClick={() => props.event("education")}>Explore more <FaExternalLinkAlt /></a>
        </div>
    );
}
export default DashboardEducation;