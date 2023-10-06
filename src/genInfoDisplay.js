import React from 'react';

function GenInfoDisplay({ generalInfo }) {
  const { fullName, email, phoneNumber, githubLink } = generalInfo;

  return (
    <div className='genInfoDisplay'>
      <div className='genInfoHeading'>
        <h3>{fullName}</h3>
      </div>
      <div className='genInfoContent'>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <a>{githubLink}</a>
      </div>
    </div>
  );
}

export default GenInfoDisplay;
