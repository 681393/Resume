import React from 'react';
import { Image } from 'react-bootstrap';
import Picture from '../../profile_picture.jpeg';
import DashboardSkills from './DashboardSkills';
import DashboardLanguage from './DashboardLanguage';
import DashboardPersonalDetails from './DashboardPersonalDetails';

function Header(props) {

    return (
        <div className="header">
            <div className="image">
                <Image src={Picture} roundedCircle width="188px" height="188px" />
            </div>
            <br />
            <DashboardPersonalDetails />
            <br />
            <DashboardSkills event={props.event} />
            <br />
            <DashboardLanguage />
        </div>);
}
export default Header;