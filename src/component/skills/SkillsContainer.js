import React from 'react';
import SkillsElement from './SkillsElement';
import { FaCode } from 'react-icons/fa';

function SkillContainer(props) {
    const skillList = props.skills.map(skill => <SkillsElement skill={skill} />);

    return (
        <div>
            <h4 className="color"><b>SKILLS</b> <FaCode /></h4>
            <hr />
            {skillList}
        </div>

    );
}
export default SkillContainer;