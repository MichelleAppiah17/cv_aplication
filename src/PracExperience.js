
import React, {useState, useEffect} from 'react';

function PracticalExperience(props) {
  const [companyName, setCompanyName] = useState('')
  const [jobTitle, SetJobtitle] = useState('')
  const [startMonth, setStartmonth] = useState('')
  const [endMonth, setEndmonth] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const[formInfo,setFormInfo] = useState({
    companyName: '',
    jobTitle: '',
    startMonth: '',
    endMonth: '',
    location: '',
    description: '',

  })

  useEffect(() => {
    if (props.isEditing) {
      setFormInfo(props.infoToEdit)
    }
  }, [props.isEditing, props.infoToEdit]);

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value 

    if(name === 'companyName'){
      setCompanyName(value);
    }else if(name === 'jobTitle'){
      SetJobtitle(value);
    }else if(name === 'startMonth'){
      setStartmonth(value);
    }else if(name === 'endMonth'){
      setEndmonth(value);
    }else if(name === 'location'){
      setLocation(value);
    }else if(name === 'description'){
      setDescription(value)
    }

    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
    }))
  };

  const submitForm = (e) => {
    e.preventDefault();

     props.saveInputValue(formInfo);

    setFormInfo({
        companyName: '',
        jobTitle: '',
        startMonth: '',
        endMonth: '',
        location: '',
        description: '',
    })
  };

  return(
    <div className='practiceInfo'>
      <div className='pracExperienceDiv'>
        <div className='formTitle'>
          <h3>Pratical Experience</h3>
        </div>
      </div>
      <div className='pracForm'>
         <form onSubmit={submitForm}>
        <div className='inputContainer'>
          <label htmlFor='companyName'>Company Name</label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            placeholder='Enter name of Company'
            value={formInfo.companyName}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='jobTitle'>Job Title</label>
          <input
            type='text'
            id='jobTitle'
            name='jobTitle'
            placeholder='Enter Title of Job'
            value={formInfo.jobTitle}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='startMonth'>Start Month</label>
          <input
            type='month'
            id='startMonth'
            name='startMonth'
            placeholder='Enter Start Month'
            value={formInfo.startMonth}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='endMonth'>End Month</label>
          <input
            type='month'
            id='endMonth'
            name='endMonth'
            placeholder='Enter End Month'
            value={formInfo.endMonth}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            id='location'
            name='location'
            placeholder='Enter Location'
            value={formInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            placeholder='Enter Description'
            value={formInfo.description}
            onChange={handleChange}
          />
        </div>
        <div className='formButtons'>
          <button>Delete</button>
          <button type='submit'>Add</button>
        </div>
      </form>
      </div>
     
    </div>
  )
}

export default PracticalExperience;
