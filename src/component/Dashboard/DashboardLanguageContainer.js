import React from 'react';
import DashboardLanguageElement from './DashboardLanguageElement';
import { FaLanguage } from 'react-icons/fa';

function DashboardLanguageContainer(props) {
    const languages = props.languages.map(e => <DashboardLanguageElement key={e.language} language={e.language} rating={e.rating} />)
    return (
        <div>
            <h5><b>LANGUAGES</b> <FaLanguage /></h5>
            <hr />
            {languages}
        </div>);
}
export default DashboardLanguageContainer;