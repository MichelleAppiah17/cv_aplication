import React from 'react';

function PracInfoDisplay({ practicalInfo, isFirstSubmission }) {
  const { companyName, jobTitle, startMonth, endMonth, location, description } = practicalInfo;

  return (
    <div className='pracInfoDisplay'>
      {isFirstSubmission && ( 
        <div className='pracInfoHeading'>
          <h3>Practical Experience</h3>
        </div>
      )}
      <div className='pracInfoContent'>
        <div>
          <p>{startMonth} - {endMonth}</p>
          <p>{location}</p>
        </div>
        <div>
          <h4>{companyName}</h4>
          <p>{jobTitle}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default PracInfoDisplay;


