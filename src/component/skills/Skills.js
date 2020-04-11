import React from 'react';
import { Container } from 'react-bootstrap';
import SkillsContainer from './SkillsContainer';
import { detailSkills } from '../../data/skills';


function Skills(props) {
    return (
        <Container>
            <SkillsContainer skills={detailSkills} />
        </Container>
    );
}
export default Skills;