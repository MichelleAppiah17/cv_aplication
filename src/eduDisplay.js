import React from 'react';

function EduExpDisplay({ educationalInfo }) {
  const { school, degree, startYear, endYear, location } = educationalInfo;

  return (
    <div className="eduDisplay">
      <h3>Education</h3>
      <p>{startYear} - {endYear}</p>
      <p>{location}</p>
      <p>{school}</p>
      <p>{degree}</p>
    </div>
  );
}

export default EduExpDisplay;

