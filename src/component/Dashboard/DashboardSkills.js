import React from 'react';
import DashboardSkillsContainer from './DashboardSkillsContainer';
import { skills } from '../../data/skills'
function DashboardSkills(props) {

    return (
        <DashboardSkillsContainer skills={skills} event={props.event} />
    );
}
export default DashboardSkills;