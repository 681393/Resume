import React from 'react';
import { FaSquare, FaSquarespace } from 'react-icons/fa';

function DashboardLanguageElement(props) {
    const { language, rating } = props;
    if (rating === 5) {
        return (
            <h6>
                {language} <br />
                <FaSquare className="color" /> <FaSquare className="color" /> <FaSquare className="color" /> <FaSquare className="color" /> <FaSquare className="color" />
            </h6>
        );
    }
    if (rating === 4) {
        return (
            <h6>
                {language} <br />
                <FaSquare className="color" /> <FaSquare className="color" /> <FaSquare className="color" /> <FaSquare className="color" /> <FaSquarespace className="color" />
            </h6>
        );
    }
    if (rating === 3) {
        return (
            <h6>
                {language} <br />
                <FaSquare className="color" /> <FaSquare className="color" /> <FaSquare className="color" /> <FaSquarespace className="color" /> <FaSquarespace className="color" />
            </h6>
        );
    }
    if (rating === 2) {
        return (
            <h6>
                {language} <br />
                <FaSquare className="color" /> <FaSquare className="color" /> <FaSquarespace className="color" /> <FaSquarespace className="color" /> <FaSquarespace className="color" />
            </h6>
        );
    }
    if (rating === 1) {
        return (
            <h6>
                {language} <br />
                <FaSquare className="color" /> <FaSquarespace className="color" /> <FaSquarespace className="color" /> <FaSquarespace className="color" /> <FaSquarespace className="color" />
            </h6>
        );
    }
}
export default DashboardLanguageElement;