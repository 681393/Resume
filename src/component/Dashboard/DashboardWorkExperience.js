import React from 'react';
import { FaProjectDiagram, FaExternalLinkAlt } from 'react-icons/fa';
import WorkExperienceElement from '../workexperience/WorkExperienceElement';
import { workExperience } from '../../data/workExperience';
function DashboardWorkExperience(props) {

    return (
        <div>
            <h4>WORK EXPERIENCE <FaProjectDiagram /></h4>
            <hr />
            <WorkExperienceElement workexperience={workExperience[0]} />
            <a href="#" onClick={() => props.event("workexperience")}>Explore more <FaExternalLinkAlt /></a>
        </div>
    );
}
export default DashboardWorkExperience;