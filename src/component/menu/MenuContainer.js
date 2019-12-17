import React from 'react';
import MenuElement from './MenuElement';
import { Nav } from 'react-bootstrap';

function MenuContainer(props) {
    const menuItems = props.menuItemList.map(menuItem => <MenuElement menuItem={menuItem} event={props.event} />);
    return (
        <Nav variant="tabs" defaultActiveKey={props.eventKey} className="flex-column">
            {menuItems}
        </Nav>)
}

export default MenuContainer;