
import React, {useState,useEffect} from 'react';

function EducationalExperience(props){
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startYear, setStartyear] = useState('')
  const [endYear, setEndyear] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    if(props.isEditing){
      setSchool(props.infoToEdit.school);
      setDegree(props.infoToEdit.degree);
      setStartyear(props.infoToEdit.startYear);
      setEndyear(props.infoToEdit.startYear);
      setLocation(props.infoToEdit.location)
    }
  },[props.isEditing,props.infoToEdit]);

  const isFormValid = () =>{
    return school.length && degree.length && startYear.length && endYear.length && location.length
  }

  const handleChange = (e) => {
   const name = e.target.value
   const value = e.target.name

    if(name === 'school'){
      setSchool(value)
    }else if (name === 'degree'){
      setDegree(value)
    }else if(name == 'startYear'){
      setStartyear(value)
    }else if(name === 'endYear'){
      setEndyear(value)
    }else if(name == 'location'){
      setLocation(value)
    }
  }

  return(
    <div className='educationalExperience'>
      <div className='eduExperienceDiv'>
        <div className='formSectionTitle'>
          <p>Educational Experience</p>
        </div>
      </div>
      <form>
        <div className='inputContainer'>
          <label htmlFor='school'>School</label>
          <input
            type='text'
            id='school'
            name='school'
            placeholder='Enter name of school'
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='degree'>Degree</label>
          <input
             type='text'
             id='degree'
             name='degree'
             placeholder='Enter name of degree'
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='startYear'>Start Year</label>
          <input
             type='year'
             id='startYear'
             name='startYear'
             placeholder='Enter Start Year'
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='endYear'>End Year</label>
          <input
             type='year'
             id='endYear'
             name='endYear'
             placeholder='Enter End Year'
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='location'>Location</label>
          <input
             type='text'
             id='location'
             name='location'
             placeholder='Enter Location'
          />
        </div>
      </form>

    </div>
  )
  
}

export default EducationalExperience;
