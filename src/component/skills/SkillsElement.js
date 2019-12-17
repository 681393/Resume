import React from 'react';

function SkillElement(props) {

    return (<>
        <h5><b>{props.skill.key}</b></h5>
        <p>{props.skill.value}</p>
        <br />
    </>)
}
export default SkillElement;