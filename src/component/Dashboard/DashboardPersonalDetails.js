import React from 'react';
import DashboardPersonalDetailsContainer from './DashboardPersonalDetailsContainer';
import { personalDetails } from '../../data/personalData'

function DashboardPersonalDetails() {

    return (
        <DashboardPersonalDetailsContainer personalDetails={personalDetails} />
    );
}
export default DashboardPersonalDetails;