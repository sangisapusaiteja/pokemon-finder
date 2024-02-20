// useEffect(function, [dependencies])

// 1. useEffect(() => {})// Runs after every re-render
// 2. useEffect(() => {}, [])// Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

import React, {useState, useEffect} from "react";

function MyComponent() {

const [count, setCount] = useState(0);
const [color, setColor] = useState("green");

useEffect(() => {
document.title =` count: ${count} ${color}` ;
}, [count, color]);

function addCount(){
setCount(c => c + 1);
}
function subtractCount(){
    setCount(c => c - 1);
    }
function changeColor(){
    setColor(c=>c==="green"?"red":"green")
}

return(<>
<p style={{color:color}} className=" text-center text-3xl p-5 m-3">Count:{count}</p>
<div className=" text-center text-3xl p-5 m-3"><button className="bg-[grey] p-5 m-3" onClick={addCount}> Add</button>
<button className="bg-[grey] p-5 m-3"onClick={subtractCount}>subtract</button>
<button className="bg-[grey] p-5 m-3" onClick={changeColor}>change color</button></div>
</>)
}
export default MyComponent;