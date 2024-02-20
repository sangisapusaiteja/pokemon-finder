import React, { useState } from "react";
function Task3() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value)
  };
  const handleClick = () => {
    setOutput(input);
  };
  return (
    <div class="flex flex-col justify-center items-center  h-screen  bg-purple-500  gap-3 ">
      <p class=" text-center text-white font-bold text-xl">Enter some text and click the button to display it</p>
      <input  class=" bg-slate-300 border-2 border-solid border-black text-center " type="text" onChange={handleChange} />
      <button class="bg-[purple] border-2 border-solid border-black rounded-lg font-bold text-xl text-white " onClick={handleClick}>Display</button>
      <p class=" text-center text-white font-bold text-xl">Output: {output}</p>
    </div>
  );
}

export default Task3;
