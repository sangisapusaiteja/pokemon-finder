import { useState } from 'react';
 function Task2() {
      const [show, Showfun] = useState(true);
      function onClick() {
        Showfun(true);
      }
      function offClick() {
        Showfun(false);
      }
      return (
        <>
       <div class="flex flex-col justify-center items-center  h-screen bg-[#e79be7]  ">
          <button onClick={onClick} class="w-80 bg-[purple] border-2 border-solid border-black rounded-lg ">show</button>
          <br></br>
          <button onClick={offClick} class="w-80 bg-[purple] border-2 border-solid border-black rounded-lg " >hide</button>
          {show && <p><div className='bg-[white] rounded-lg w-80 h-80'> </div></p>}
          </div>
        </>
      );
      }
export default Task2;