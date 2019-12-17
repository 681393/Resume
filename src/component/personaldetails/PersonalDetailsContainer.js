import React from 'react';
import PersonalDetailsElement from './PersonalDetailsElement';
import { Table, Container } from 'react-bootstrap';

function PersonalDetailsContainer(props) {
    const personalDetailList = props.personalDetails.map(personalDetail => <PersonalDetailsElement personalDetail={personalDetail} />)
    return (
            <Table>
                {personalDetailList}
            </Table>
    );
}

export default PersonalDetailsContainer;