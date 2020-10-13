import React from "react";

function WorkExperienceElement(props) {
  const e = props.workexperience;
  const workExp = (
    <>
      <h5>
        <b>{e.project}</b>
      </h5>
      <h5>{e.client}</h5>
      <h6>{e.role}</h6>
      <h6 className="color">{e.date}</h6>
      <h6>
        <i>Description</i>
      </h6>
      <p>{e.description}</p>
      <h6>
        <i>Responsibilities</i>
      </h6>
      {e.responsibilities.length === 1
        ? e.responsibilities
        : e.responsibilities.map((e1) => (
            <ul>
              <li>{e1}</li>
            </ul>
          ))}
      <h6>
        <i>Technology Used</i>
      </h6>
      <p>{e.technologies}</p>
      <h6>
        <i>Achievements</i>
      </h6>
      {e.achievements.length === 1
        ? e.achievements
        : e.achievements.map((e1) => (
            <ul>
              <li>{e1}</li>
            </ul>
          ))}
    </>
  );

  return <>{workExp}</>;
}

export default WorkExperienceElement;
