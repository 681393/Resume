import React from 'react';
import WorkExperienceContainer from './WorkExperienceContainer';
import { workExperience } from '../../data/workExperience';

function WorkExperience(props) {

    return (
        <WorkExperienceContainer WorkExperienceList={workExperience} />
    );
}
export default WorkExperience;