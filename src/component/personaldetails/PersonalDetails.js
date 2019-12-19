import React from 'react';
import PersonalDetailsContainer from './PersonalDetailsContainer';
import PersonalDetailList from '../../DataFiles/personaldetails.json';

function PersonalDetails(props) {

    return (

        <PersonalDetailsContainer personalDetails={PersonalDetailList} />

    );
}
export default PersonalDetails;