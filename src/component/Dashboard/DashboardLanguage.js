import React from 'react';
import DashboardLanguageContainer from './DashboardLanguageContainer';
import { languages } from '../../data/languages';

function DashboardLanguage() {

    return (
        <DashboardLanguageContainer languages={languages} />
    );
}
export default DashboardLanguage;