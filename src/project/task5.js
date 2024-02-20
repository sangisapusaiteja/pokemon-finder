import React from 'react';
import { useForm } from 'react-hook-form';
const Task5 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    
    <div class="flex justify-center items-center  h-screen  bg-purple-500  ">
      <div class="bg-white flex justify-center items-center border-2 border-solid border-black rounded-md p-5  ">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1 class=" text-center text-[purple] font-bold text-lg">Signup Page</h1>
        <label  class="justify-between   bg-purple-500">
          First Name:  
          <input  class=" bg-slate-300 border-2 border-solid border-black " {...register('firstName')} />
        </label>
        <br />
        <label class="justify-between   bg-purple-500">
          Last Name:
          <input  class=" bg-slate-300 border-2 border-solid border-black "{...register('lastName')} />
        </label>
        <br />
        <label class="justify-between    bg-purple-500">
          Email  :   
          <input class=" bg-slate-300 border-2 border-solid border-black " {...register('email')}  />
        </label>
        <br />
        <label class="justify-between bg-purple-500">
          Phone:
          <input class=" bg-slate-300 border-2 border-solid border-black" {...register('phone')} />
        </label>
        <br />
        <label class="justify-between bg-purple-500">
          Age:
          <input  class=" bg-slate-300 border-2 border-solid border-black"{...register('age')} />
        </label>
        <br />
        <label class="justify-between bg-purple-500">
          Gender:
          <select class=" bg-slate-300 border-2 border-solid border-black" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <div class='flex justify-center'>
        <button class="bg-[purple] border-2 border-solid border-black rounded-lg " type="submit">Sign Up</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Task5;
