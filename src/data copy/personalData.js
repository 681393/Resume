import React from 'react';
import { FaEnvelope, FaMobileAlt, FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
export const personalDetails = [
    { id: 'email', value: 'jain.himanshu1990@gmail.com', icon: <FaEnvelope className="color" /> },
    { id: 'phone', value: '+91 9711681255', icon: <FaMobileAlt className="color" /> },
    { id: 'location', value: 'Noida, India', icon: <FaMapMarkerAlt className="color" /> },
    { id: 'visa', value: "Currently Holding H1-B Visa", icon: <FaPlane className="color" /> }
];