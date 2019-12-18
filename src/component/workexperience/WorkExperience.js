import React from 'react';
import WorkExperienceList from '../../DataFiles/workexperiencelist.json';
import WorkExperienceContainer from './WorkExperienceContainer';

function WorkExperience(props) {
    return (
        <WorkExperienceContainer WorkExperienceList={WorkExperienceList} />
    );
}
export default WorkExperience;