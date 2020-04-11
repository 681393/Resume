import React from 'react';
import DashboardAwardsElement from './DashboardAwardsElement';
import { FaAward } from 'react-icons/fa';

function DashboardAwardsContainer(props) {
    const awards = props.awards.map(e => <DashboardAwardsElement key={e.award} award={e.award} count={e.count} />)
    return (
        <div>
            <h4>AWARDS <FaAward /></h4>
            <hr />
            {awards}
        </div>);
}
export default DashboardAwardsContainer;