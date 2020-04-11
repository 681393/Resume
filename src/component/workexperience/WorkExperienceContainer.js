import React from 'react';
import WorkExperienceElement from './WorkExperienceElement';
import { FaProjectDiagram } from 'react-icons/fa';

function WorkExperienceContainer(props) {
    const workExperienceList = props.WorkExperienceList.map(workexperience => <><WorkExperienceElement workexperience={workexperience} /> <br /></>);
    return (<div>
        <h4>WORK EXPERIENCE <FaProjectDiagram /></h4>
        <hr />
        {workExperienceList}
    </div>);
}

export default WorkExperienceContainer;