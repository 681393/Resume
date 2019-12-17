import React from 'react';
import { Nav } from 'react-bootstrap';

function MenuElement(props) {
    const { key, value, figure } = props.menuItem;
    const font = { fontFamily: 'Calibri', fontSize:'16px' };

    return (
        <>
            <Nav.Item style={font}>
                <Nav.Link eventKey={key} onClick={() => props.event(key)}>{value} {figure}</Nav.Link>
            </Nav.Item>
        </>
    );
}
export default MenuElement;