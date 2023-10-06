import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EduExperience';
import PracticalExperience from './PracExperience';
import Resume from './resume';

function App() {
  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [generalInformation, setGeneralInformation] = useState([]);
  const [practicalExperiences, setPracticalInformation] = useState([]);

   const saveGeneralInfoData = (formData) => {
    setGeneralInformation([...generalInformation, formData]);
  }

  const saveEducationalData = (formData) => {
    setEducationalExperiences([...educationalExperiences, formData]);
  };

  const savePracticalData = (formData) => {
    setPracticalInformation([...practicalExperiences, formData]);
  }

  return (
    <div className='App'>
      <div className='cvHeading'>
        <h1>CV Generator</h1>
      </div>
      <div className='formsAndResume'>
        <div className='appForms'>
          <GeneralInfo saveInputValue={saveGeneralInfoData} />
          <EducationalExperience saveInputValue={saveEducationalData} />
          <PracticalExperience saveInputValue={savePracticalData}/>
        </div>
        <Resume
         generalInformation={generalInformation} 
         educationalExperiences={educationalExperiences}
         practicalExperiences={practicalExperiences} 
         />
      </div>
    </div>
  );
}

export default App;


