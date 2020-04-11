import React from 'react';
import DashboardSkillsElement from './DashboardSkillsElement';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

function DashboardSkillsContainer(props) {
    const skills = props.skills.map(e => <DashboardSkillsElement key={e.skill} skill={e.skill} rating={e.rating} />)
    return (
        <div>
            <h5><b>MAJOR SKILLS</b> <FaCode /></h5>
            <hr />
            {skills}
            <a href="#" onClick={() => props.event("skills")}>Explore more <FaExternalLinkAlt /></a>
        </div>);
}
export default DashboardSkillsContainer;