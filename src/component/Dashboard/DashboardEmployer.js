import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { currentEmployer } from '../../data/currentEmployer';

function DashboardEmployer() {

    return (
        <div>
            <h4>CURRENT EMPLOYER <FaUserTie /></h4>
            <hr />
            <h5><b>{currentEmployer.employerName}</b></h5>
            <h6 className="color">{currentEmployer.duration}</h6>
        </div>
    );
}
export default DashboardEmployer;