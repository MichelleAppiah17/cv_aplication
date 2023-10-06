import React, { useState, useEffect } from 'react';

function GeneralInfo(props) {
  const [formInfo, setFormInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    githubLink: '',
    linkedInLink: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (props.isEditing) {
      setFormInfo(props.infoToEdit);
    }
  }, [props.isEditing, props.infoToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
    }));
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    props.saveInputValue(formInfo);

    setFormInfo({
      fullName: '',
      email: '',
      phoneNumber: '',
      githubLink: '',
      linkedInLink: '',
    });

    setIsFormVisible(false);
  };


  return (
    <div className="generalInfo">
      <div className="formHeadingDiv">
        <div className="genformTitle">
          <h3>
            General Information{' '}
             <span
              className='formToggleArrow'
              onClick={toggleFormVisibility}
            >
              {isFormVisible ? '▼'  : '▲'}
            </span>
          </h3>
        </div>
      </div>
      {isFormVisible && (
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
        <div className='inputContainer'>
          <label htmlFor="linkedInLink">LinkedIn link</label>
          <input
            type='text'
            placeholder='Enter link to your linkedIn'
            id='linkedInLink'
            name='linkedInLink'
            value={formInfo.linkedInLink}
            onChange={handleChange}
          />
        </div>
        <div className='formButtons'>
          <button>Delete</button>
          <button type='submit'>Add</button>
        </div>
      </form>
      </div>
     )} 
    </div>
  );
}

export default GeneralInfo;

