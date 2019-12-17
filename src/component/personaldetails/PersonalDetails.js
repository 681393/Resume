import React from 'react';
import PersonalDetailsContainer from './PersonalDetailsContainer';

function PersonalDetails(props) {
    const personalDetails = [
        { key: 'Name', value: 'Himanshu Jain' },
        { key: 'Email Address', value: 'jain.himanshu1990@gmail.com' },
        { key: 'Contact Number', value: '+91 9711681255' },
        { key: 'Current Employer', value: 'Tata Consultancy Services' },
        { key: 'Date of Birth', value: 'January 24, 1990' },
        { key: 'Address', value: 'Flat No 3075 Tower 3, Mahagun Mywoods Gaur City 2, Sector 16C, Greater Noida West' },
        { key: 'Current Holding Visa', value: 'H1-B (USA)' }
    ];
    return (

        <PersonalDetailsContainer personalDetails={personalDetails} />

    );
}
export default PersonalDetails;