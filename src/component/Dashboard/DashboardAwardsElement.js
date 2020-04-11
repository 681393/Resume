import React from 'react';
import { Badge } from 'react-bootstrap';

function DashboardAwardsElement(props) {
    const { award, count } = props;
    return (
        <h6>{award} <Badge variant='danger' pill>{count}</Badge></h6>
    );
}
export default DashboardAwardsElement;