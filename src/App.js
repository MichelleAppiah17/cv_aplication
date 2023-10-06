import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EduExperience';
import PracticalExperience from './PracExperience';
import Resume from './resume';

function App() {
  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [generalInformation, setGeneralInformation] = useState([]);
  const [practicalExperiences, setPracticalExperiences] = useState([]); // Fixed variable name
  const [practicalCount, setPracticalCount] = useState(0);
  const [generalCount, setGeneralCount] = useState(0);
  const [educationalCount, setEducationalCount] = useState(0);

  const saveGeneralInfoData = (formData) => {
    setGeneralInformation([...generalInformation, formData]);
    setGeneralCount(generalCount + 1);
  };

  const saveEducationalData = (formData) => {
    setEducationalExperiences([...educationalExperiences, formData]);
    setEducationalCount(educationalCount + 1);
  };

  const savePracticalData = (formData) => {
    setPracticalExperiences([...practicalExperiences, formData]);
    setPracticalCount(practicalCount + 1);
  };

  return (
    <div className='App'>
      <div className='cvHeading'>
        <h1>CV Generator</h1>
      </div>
      <div className='formsAndResume'>
        <div className='appForms'>
          <GeneralInfo 
            saveInputValue={saveGeneralInfoData} 
            isFirstSubmission={generalCount === 0}
          />
          <EducationalExperience
            saveInputValue={saveEducationalData}
            isFirstSubmission={educationalCount === 0} 
          />
          <PracticalExperience
            saveInputValue={savePracticalData}
            isFirstSubmission={practicalCount === 0}
          />
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





