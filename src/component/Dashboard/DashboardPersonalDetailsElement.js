import React from 'react';

function DashboardPersonalDetailsElement(props) {
    const font = { fontFamily: 'Calibri' };
    const { value, icon } = props;
    return (<>
        <span>{icon}</span><h6 style={font}> {value}</h6>
    </>
    );
}
export default DashboardPersonalDetailsElement;