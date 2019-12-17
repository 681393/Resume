import React from 'react';
import SkillsElement from './SkillsElement';

function SkillContainer(props) {
    const skillList = props.skills.map(skill => <SkillsElement skill={skill} />);
    const font = { fontFamily: 'Calibri' };
    return (
        <div style={font}>
            {skillList}
        </div>

    );
}
export default SkillContainer;