import React, { useState, useEffect } from 'react';

function GeneralInfo(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [form, setForm] = useState('generalInfoForm');
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (props.isEditing) {
      setFullName(props.infoToEdit.fullName);
      setEmail(props.infoToEdit.email);
      setPhoneNumber(props.infoToEdit.phoneNumber);
      setGithubLink(props.infoToEdit.githubLink);
      setIsShown(true);
    }
  }, [props.isEditing, props.infoToEdit]);

  //const isFormValid = () => {
   // return fullName.length && email.length && phoneNumber.length && githubLink.length;
 // };

  //const toggleForm = () => {
   // setIsShown(!isShown);
 // };

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
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const formInfo = {
      fullName,
      email,
      phoneNumber,
      githubLink,
      form,
      isShown,
    };

    props.saveInputValue(formInfo);

    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setGithubLink('');
    setIsShown(false);
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
            value={fullName}
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
            value={email}
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
            value={phoneNumber}
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
            value={githubLink}
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

