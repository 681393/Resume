import React from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

function DashboardSkillsElement(props) {
    const { skill, rating } = props;
    if (rating === 5) {
        return (
            <h6>
                {skill} <br />
                <FaCircle className="color" /> <FaCircle className="color" /> <FaCircle className="color" /> <FaCircle className="color" /> <FaCircle className="color" />
            </h6>
        );
    }
    if (rating === 4) {
        return (
            <h6>
                {skill} <br />
                <FaCircle className="color" /> <FaCircle className="color" /> <FaCircle className="color" /> <FaCircle className="color" /> <FaRegCircle className="color" />
            </h6>
        );
    }
    if (rating === 3) {
        return (
            <h6>
                {skill} <br />
                <FaCircle className="color" /> <FaCircle className="color" /> <FaCircle className="color" /> <FaRegCircle className="color" /> <FaRegCircle className="color" />
            </h6>
        );
    }
    if (rating === 2) {
        return (
            <h6>
                {skill} <br />
                <FaCircle className="color" /> <FaCircle className="color" /> <FaRegCircle className="color" /> <FaRegCircle className="color" /> <FaRegCircle className="color" />
            </h6>
        );
    }
    if (rating === 1) {
        return (
            <h6>
                {skill} <br />
                <FaCircle className="color" /> <FaRegCircle className="color" /> <FaRegCircle className="color" /> <FaRegCircle className="color" /> <FaRegCircle className="color" />
            </h6>
        );
    }
}
export default DashboardSkillsElement;