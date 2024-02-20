import { useState } from 'react';
 function Task1() {
      const [show, Showfun] = useState(false);
      function Click() {
        Showfun(!show);
      }
      return (
        <>
        <div class="flex flex-col justify-center items-center  h-screen bg-[#e79be7] gap-3 ">
          <button onClick={Click}  class="w-80 bg-[purple] border-2 border-solid border-black rounded-lg ">
            {show ? 'Hide' : 'Show'}
          </button>
          {show && <p><div className='bg-[white] rounded-lg w-80 h-80'> </div></p>}
          </div>
        </>
      );
      }

export default Task1;


// {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// {cond && <A />} means “if cond, render <A />, otherwise nothing”



// A JavaScript && expression returns the value of its right side 
// (in our case, the checkmark) if the left side (our condition) is true