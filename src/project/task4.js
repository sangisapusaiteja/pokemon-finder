import React, { useState } from 'react';

const Task4 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      email,
      phone,
      age,
      gender,
    });
  };

  return (
    <div class="flex justify-center items-center  h-screen  bg-purple-500  " >
    <div class="bg-white flex justify-center items-center border-2 border-solid border-black rounded-md p-5  "> <form>
        <label>
          First Name:
          <input class=" bg-slate-300 border-2 border-solid border-black " type="text" value={firstName} onChange={(parameter) => setFirstName(parameter.target.value)} />
        </label>
        <br />

        <label>
          Last Name:
          <input class=" bg-slate-300 border-2 border-solid border-black " type="text" value={lastName} onChange={(parameter) => setLastName(parameter.target.value)} />
        </label>
        <br />

        <label>
          Email:
          <input class=" bg-slate-300 border-2 border-solid border-black " type="email" value={email} onChange={(parameter) => setEmail(parameter.target.value)} />
        </label>
        <br />

        <label>
          Phone:
          <input class=" bg-slate-300 border-2 border-solid border-black " type="tel" value={phone} onChange={(parameter) => setPhone(parameter.target.value)} />
        </label>
        <br />

        <label>
          Age:
          <input class=" bg-slate-300 border-2 border-solid border-black "type="number" value={age} onChange={(parameter) => setAge(parameter.target.value)} />
        </label>
        <br />

        <label>
          Gender:
          <select value={gender}  class=" bg-slate-300 border-2 border-solid border-black "onChange={(parameter) => setGender(parameter.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <div class='flex justify-center'>
        <button   class="bg-[purple] border-2 border-solid border-black rounded-lg " type="button" onClick={handleSubmit}>Sign Up</button>
     </div> </form>
      </div> 
    </div>
  );
};

export default Task4;
