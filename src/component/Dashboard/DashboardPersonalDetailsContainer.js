import React from 'react';
import DashboardPersonalDetailsElement from './DashboardPersonalDetailsElement';

function DashboardPersonalDetailsContainer(props) {
    const personalDetails = props.personalDetails.map(e => <DashboardPersonalDetailsElement key={e.id} value={e.value} icon={e.icon} />)
    return (
        <div>
            {personalDetails}
        </div>);
}
export default DashboardPersonalDetailsContainer;