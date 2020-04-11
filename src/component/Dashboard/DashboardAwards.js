import React from 'react';
import DashboardAwardsContainer from './DashboardAwardsContainer';
import { awards } from '../../data/awards';

function DashboardAwards() {

    return (
        <DashboardAwardsContainer awards={awards} />
    );
}
export default DashboardAwards;