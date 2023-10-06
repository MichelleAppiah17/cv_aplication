import React from 'react';
import EduExpDisplay from './eduDisplay';
import GenInfoDisplay from './genInfoDisplay';
import PracInfoDisplay from './pracInfoDisplay';

function Resume({ educationalExperiences, generalInformation, practicalExperiences}) {
  return (
    <div className='myResume'>
        <div className='forGenInfo'>
        {generalInformation && generalInformation.map((gen, index) => (
          <GenInfoDisplay key={index} generalInfo={gen} />
        ))}
      </div>
      <div className='forEduInfo'>
        {educationalExperiences && educationalExperiences.map((edu, index) => (
          <EduExpDisplay key={index} educationalInfo={edu} />
        ))}
      </div>
      <div className='forPracInfo'>
        {practicalExperiences && practicalExperiences.map((prac, index) => (
          <PracInfoDisplay key={index} practicalInfo={prac} />
        ))}
      </div>
    </div>
  );
}

export default Resume;

