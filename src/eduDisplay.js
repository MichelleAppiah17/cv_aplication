import React from 'react';

function EduExpDisplay({ educationalInfo, isFirstSubmission }) {
  const { school, degree, startYear, endYear, location } = educationalInfo;

  return (
    <div className="eduDisplay">
      {isFirstSubmission && ( 
      <div className='eduHeading'>
        <h3>Education</h3>
      </div>
      )}
      <div className='eduContent'>
        <div>
          <p>{startYear} - {endYear}</p>
          <p>{location}</p>
        </div>
        <div>
          <h4>{school}</h4>
          <p>{degree}</p>
        </div>
      </div>
    </div>
  );
}

export default EduExpDisplay;

