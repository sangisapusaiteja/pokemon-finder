import ComponentB from "./componentB"
import  {useState} from "react"
function ComponentA(){


    const [count,setCount]=useState(0)
    function incrementClick(){
        console.log("increament button click happens")
        console.log("count is ",count+1)
        setCount(count+1)
      
        
    }
    function decreamentClick(){
        console.log("decreament button click happens")
        console.log("count is ",count-1)
        setCount(count-1)
        
    }
    return(
        <div className=" bg-black p-10 text-white">
            <div>Component A</div>
            <div >
            <ComponentB  Count={count}/>
            </div>
            <button onClick={decreamentClick}>decrement</button>
            <div>{count}</div>
            <button  onClick={incrementClick}>increment</button>
        </div>
    )

}
export default ComponentA