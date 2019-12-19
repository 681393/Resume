import React from 'react';
//import WorkExperienceList from '../../DataFiles/workexperiencelist.json';
import WorkExperienceContainer from './WorkExperienceContainer';

function WorkExperience(props) {
    const WorkExperienceList = [
        {
            "key": "Project I",
            "value": [
                {
                    "key": "Project",
                    "value": [
                        "Unemployment Insurance"
                    ]
                },
                {
                    "key": "Customer",
                    "value": [
                        "Connecticut Department of Labor"
                    ]
                },
                {
                    "key": "Period",
                    "value": [
                        "10/2019 - till present"
                    ]
                },
                {
                    "key": "Role",
                    "value": [
                        "Developer"
                    ]
                },
                {
                    "key": "Responsibility",
                    "value": [
                        "Analysis and designing of new CRs",
                        "Development of new modules",
                        "Code Refactoring",
                        "Implementation of change request",
                        "Unit Testing of modules",
                        "Code review of fellow associates"
                    ]
                },
                {
                    "key": "Achievements",
                    "value": [
                        "Received On the Spot Award",
                        "Received multiple appreciation from customer"
                    ]
                }
            ]
        },
        {
            "key": "Project II",
            "value": [
                {
                    "key": "Project",
                    "value": [
                        "Unemployment Insurance"
                    ]
                },
                {
                    "key": "Customer",
                    "value": [
                        "Maine Department of Labor"
                    ]
                },
                {
                    "key": "Period",
                    "value": [
                        "01/2018 - 09/2019"
                    ]
                },
                {
                    "key": "Role",
                    "value": [
                        "Developer"
                    ]
                },
                {
                    "key": "Responsibility",
                    "value": [
                        "Analysis and designing of new CRs",
                        "Development of new modules",
                        "Code Refactoring",
                        "Implementation of change request",
                        "Unit Testing of modules",
                        "Code review of fellow associates"
                    ]
                },
                {
                    "key": "Achievements",
                    "value": [
                        "Received On the Spot Awards",
                        "Received multiple appreciation from customer"
                    ]
                }
            ]
        },
        {
            "key": "Project III",
            "value": [
                {
                    "key": "Project",
                    "value": [
                        "Unemployment Insurance"
                    ]
                },
                {
                    "key": "Customer",
                    "value": [
                        "Misissippi Department of Employment Security"
                    ]
                },
                {
                    "key": "Period",
                    "value": [
                        "04/2017 - 12/2017"
                    ]
                },
                {
                    "key": "Role",
                    "value": [
                        "Developer"
                    ]
                },
                {
                    "key": "Responsibility",
                    "value": [
                        "Development of new modules",
                        "Code Refactoring",
                        "Implementation of change request",
                        "Unit Testing of modules"
                    ]
                },
                {
                    "key": "Achievements",
                    "value": [
                        "Received appreciations for in time delivery",
                        "Received Best Team Award"
                    ]
                }
            ]
        },
        {
            "key": "Project IV",
            "value": [
                {
                    "key": "Project",
                    "value": [
                        "Tax Mantra Project"
                    ]
                },
                {
                    "key": "Customer",
                    "value": [
                        "Government of Phoenix"
                    ]
                },
                {
                    "key": "Period",
                    "value": [
                        "06/2014 - 03/2017"
                    ]
                },
                {
                    "key": "Role",
                    "value": [
                        "Developer"
                    ]
                },
                {
                    "key": "Responsibility",
                    "value": [
                        "Planning and implementing code enhancements according to customer requirement.",
                        "Provide technical support for Java applications issues reported by customer.",
                        "Provide RCA for escalated issues.",
                        "Provide Service Improvement Plan (SIP) by analyzing code time to time to find defects and work to resolve them.",
                        "Handling erroneous data issues related to database.",
                        "Testing of code release prior implementing to production environment."
                    ]
                },
                {
                    "key": "Achievements",
                    "value": [
                        "Received On the Spot Awards",
                        "Received CLP faculty Award"
                    ]
                }
            ]
        },
        {
            "key": "Project V",
            "value": [
                {
                    "key": "Project",
                    "value": [
                        "e~Tax Application Project"
                    ]
                },
                {
                    "key": "Customer",
                    "value": [
                        "Government of Phoenix"
                    ]
                },
                {
                    "key": "Period",
                    "value": [
                        "03/2013 - 05/2013"
                    ]
                },
                {
                    "key": "Role",
                    "value": [
                        "Developer"
                    ]
                },
                {
                    "key": "Responsibility",
                    "value": [
                        "Planning and implementing code enhancements according to customer requirement.",
                        "Provide technical support for Java applications issues reported by customer.",
                        "Provide RCA for escalated issues.",
                        "Provide Service Improvement Plan (SIP) by analyzing code time to time to find defects and work to resolve them.",
                        "Handling erroneous data issues related to database.",
                        "Testing of code release prior implementing to production environment."
                    ]
                },
                {
                    "key": "Achievements",
                    "value": [
                        "Started as a Fresher, I got familiar with the Process of handling Change Requests, learned Struts at basic level which were utilized for any future possibilities.",
                        "Learned how to work with actual business client."
                    ]
                }
            ]
        },
        {
            "key": "Project VI",
            "value": [
                {
                    "key": "Project",
                    "value": [
                        "Online Test Taking System"
                    ]
                },
                {
                    "key": "Customer",
                    "value": [
                        "Tata Consultancy Services"
                    ]
                },
                {
                    "key": "Period",
                    "value": [
                        "12/2012 - 03/2013"
                    ]
                },
                {
                    "key": "Role",
                    "value": [
                        "Developer"
                    ]
                },
                {
                    "key": "Responsibility",
                    "value": [
                        "Designed Online Test Taking System architecture.",
                        "Developed the module for CRUD operations related to users of application.",
                        "Designed all tables used in the application."
                    ]
                },
                {
                    "key": "Achievements",
                    "value": [
                        "The overall training has enhanced my technical and interpersonal skills as well as my understanding of team dynamics.",
                        "The team player in me has got pertinent recognition during ILP."
                    ]
                }
            ]
        }
    ];
    return (
        <WorkExperienceContainer WorkExperienceList={WorkExperienceList} />
    );
}
export default WorkExperience;