
import React , {useState} from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EduExperience';
import PracticalExperience from './PracExperience';
import EduExpDisplay from './eduDisplay';
import Resume from './resume';

function App() {
   const [educationalData, setEducationalData] = useState([]);

  const saveEducationalData = (formData) => {
    setEducationalData([...educationalData, formData]);
  };
  return (
    <div className="App">
      <div className='cvHeading'>
        <h1>CV Generator</h1>
      </div>
      <div className='formsAndResume'>
        <div className='appForms'>
        <GeneralInfo/>
        <EducationalExperience saveInputValue={saveEducationalData} />
       <PracticalExperience/>
      </div>
      <div className='resume'>
        {educationalData.map((edu, index) => (
        <EduExpDisplay key={index} educationalInfo={edu}  />
        ))}
      </div>
      <Resume/>
      </div>
    </div>
  );
}

export default App;

