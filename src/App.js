import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EduExperience';
import PracticalExperience from './PracExperience';
import Resume from './resume';

function App() {
  const [educationalExperiences, setEducationalExperiences] = useState([]);

  const saveEducationalData = (formData) => {
    setEducationalExperiences([...educationalExperiences, formData]);
  };

  return (
    <div className='App'>
      <div className='cvHeading'>
        <h1>CV Generator</h1>
      </div>
      <div className='formsAndResume'>
        <div className='appForms'>
          <GeneralInfo />
          <EducationalExperience saveInputValue={saveEducationalData} />
          <PracticalExperience />
        </div>
        <Resume educationalExperiences={educationalExperiences} />
      </div>
    </div>
  );
}

export default App;

