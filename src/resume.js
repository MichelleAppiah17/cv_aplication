import React from 'react';
import EduExpDisplay from './eduDisplay';

function Resume({ educationalExperiences }) {
  return (
    <div className='myResume'>
      {educationalExperiences.map((edu, index) => (
        <EduExpDisplay key={index} educationalInfo={edu} />
      ))}
    </div>
  );
}

export default Resume;