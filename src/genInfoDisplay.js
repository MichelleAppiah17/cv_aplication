import React from 'react';

function GenInfoDisplay({ generalInfo }) {
  const { fullName, email, phoneNumber, githubLink, linkedInLink } = generalInfo;

  return (
    <div className='genInfoDisplay'>
      <div className='genInfoHeading'>
        <h2>{fullName}</h2>
      </div>
      <div className='genInfoContent'>
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{githubLink}</p>
          <p>{linkedInLink}</p>
        
      </div>
    </div>
  );
}

export default GenInfoDisplay;
