import React from 'react';
import { FaUserAlt, FaUserGraduate, FaChartPie, FaFileCode, FaIdCard } from 'react-icons/fa';
import MenuContainer from './MenuContainer';


function Menu(props) {

    const menuItemList = [{ key: 'dashboard', value: 'DashBoard', figure: <FaChartPie /> },
    { key: 'workexperience', value: 'Work Experience', figure: <FaIdCard /> },
    { key: 'skills', value: 'Skills', figure: <FaFileCode /> },
    { key: 'education', value: 'Education', figure: <FaUserGraduate /> },
    { key: 'personaldetails', value: 'Personal Details', figure: <FaUserAlt /> }];

    return (<MenuContainer menuItemList={menuItemList} eventKey={props.eventKey} event={props.event} />);
}

export default Menu;