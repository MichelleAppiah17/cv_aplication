import React from 'react';

function PracInfoDisplay({ practicalInfo }) {
  const { companyName, jobTitle, startMonth, endMonth, location, description } = practicalInfo;

  return (
    <div className='pracInfoDisplay'>
      <div className='pracInfoHeading'>
        <h3>Practical Experience</h3>
      </div>
      <div className='pracInfoContent'>
        <p>{companyName}</p>
        <p>{jobTitle}</p>
        <p>{startMonth}</p>
        <p>{endMonth}</p>
        <p>{location}</p>
        <p>{description }</p>
        
      </div>
    </div>
  );
}

export default PracInfoDisplay;
