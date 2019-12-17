import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SkillsContainer from './SkillsContainer';


function Skills(props) {
    const skills = [
        { key: 'FRAMEWORK', value: 'Struts 1.2, Spring 3.0, Hibernate 3.0, React JS, React Native' },
        { key: 'TECHNOLOGIES', value: 'Core Java, Advanced Java, Selenium, JUnit, Bootstrap, JDBC, HTML, Java Script, AngularJS, NodeJS, MongoDB, Android, Mongoose, JSF, Hadoop' },
        { key: 'IDE', value: 'Eclipse, Andriod Studio, Visual Studio' },
        { key: 'DATABASE', value: 'Oracle 11G, PLSQL, IBM DB2, MongoDB' },
        { key: 'APPLICATION SERVER', value: 'WAS 8.5, WebLogic 11G, Apache Tomcat' },
        { key: 'VERSION CONTROL TOOL', value: 'VSS, SVN, IBM JAZZ' },
        { key: 'TOOLS', value: 'Squirrel, PLSQL Developer, SQL Client, Crystal Reports, BIRT Reporting tool' },
        { key: 'OPERATING SYSTEM', value: 'Windows 10, Windows 7' },
        { key: 'METHODS', value: 'Agile, Water Fall, Devops' },
        { key: 'DOMAIN', value: 'US Tax Domain, US Benefits Domain' }
    ];
    return (
        <Container>
            <SkillsContainer skills={skills} />
        </Container>
    );
}
export default Skills;