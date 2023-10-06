import React, { useState, useEffect } from 'react';

function GeneralInfo(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [githubLink, setGithubLink] = useState('');

  const[formInfo,setFormInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    githubLink: '',

  })

  useEffect(() => {
    if (props.isEditing) {
      setFormInfo(props.infoToEdit)
    }
  }, [props.isEditing, props.infoToEdit]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    } else if (name === 'githubLink') {
      setGithubLink(value);
    }

    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
    }))
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

     props.saveInputValue(formInfo);

    setFormInfo({
       fullName: '',
       email: '',
       phoneNumber: '',
       phoneNumber: '',
       githubLink: '',
    })
  };

  return (
    <div className="generalInfo">
      <div className="formHeadingDiv">
        <div className="formSectionTitle">
          <h3>General Information</h3>
        </div>
      </div>
      <div className='generalForm'>
      <form onSubmit={onSubmitForm}>
        <div className='inputContainer'>
          <label htmlFor="fullName">Full Name</label>
          <input
            type='text'
            placeholder='Enter your full name'
            id='fullName'
            name='fullName'
            value={formInfo.fullName}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="email">Email</label>
          <input
            type='text'
            placeholder='Enter your email'
            id='email'
            name='email'
            value={formInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type='text'
            placeholder='Enter your phone number'
            id='phoneNumber'
            name='phoneNumber'
            value={formInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className='inputContainer'>
          <label htmlFor="githubLink">Github link</label>
          <input
            type='text'
            placeholder='Enter link to your github'
            id='githubLink'
            name='githubLink'
            value={formInfo.githubLink}
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
  );
}

export default GeneralInfo;

