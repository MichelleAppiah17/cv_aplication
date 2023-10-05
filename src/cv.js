// CVGenerator.js
import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EduExperience';
import PracticalExperience from './PracExperience';

function CV() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationalExperience, setEducationalExperience] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState([]);

  // Add functions to update state for each section

  return (
    <div>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <EducationalExperience
        educationalExperience={educationalExperience}
        setEducationalExperience={setEducationalExperience}
      />
      <PracticalExperience
        practicalExperience={practicalExperience}
        setPracticalExperience={setPracticalExperience}
      />
      {/* Add a button to generate the CV */}
    </div>
  );
}

export default CV;

