import React from 'react';
import DashboardAwards from './DashboardAwards';
import DashboardWorkExperience from './DashboardWorkExperience';
import DashboardEmployer from './DashboardEmployer';
import DashboardEducation from './DashboardEducation';

function DashBoard(props) {

    return (
        <>
            <div>
                <DashboardWorkExperience event={props.event} />
                <br />
                <DashboardEmployer />
                <br />
                <DashboardEducation event={props.event} />
                <br />
                <DashboardAwards />
            </div>
        </>
    );
}
export default DashBoard;