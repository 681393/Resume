import React from 'react';
import WorkExperienceElement from './WorkExperienceElement';

function WorkExperienceContainer(props) {
    const workExperienceList = props.WorkExperienceList.map(workexperience => <><h5><b>{workexperience.key}</b></h5><WorkExperienceElement workexperience={workexperience.value} /></>);
    return (<>
        {workExperienceList}
    </>);
}

export default WorkExperienceContainer;