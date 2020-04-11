import React from 'react';
import { headerDetails } from '../../data/headerDetails';

function DashboardAboutMe() {

    return (
        <div className="aboutme">
            <h3>{headerDetails.name}</h3>
            <h5>{headerDetails.job_profile}</h5>
            <h6>{headerDetails.job_desc}</h6>
        </div>
    );
}
export default DashboardAboutMe;