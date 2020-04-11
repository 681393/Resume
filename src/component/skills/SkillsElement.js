import React from 'react';

function SkillElement(props) {

    return (<>
        <h5>{props.skill.key}</h5>
        <h6 className="lighter">{props.skill.value}</h6>
        <br />
    </>)
}
export default SkillElement;