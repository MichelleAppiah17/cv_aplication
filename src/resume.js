import React from 'react';
import EduExpDisplay from './eduDisplay';
import GenInfoDisplay from './genInfoDisplay';

function Resume({ educationalExperiences, generalInformation }) {
  return (
    <div className='myResume'>
      <div className='forEduInfo'>
        {educationalExperiences && educationalExperiences.map((edu, index) => (
          <EduExpDisplay key={index} educationalInfo={edu} />
        ))}
      </div>
      <div className='forGenInfo'>
        {generalInformation && generalInformation.map((gen, index) => (
          <GenInfoDisplay key={index} generalInfo={gen} />
        ))}
      </div>
    </div>
  );
}

export default Resume;

