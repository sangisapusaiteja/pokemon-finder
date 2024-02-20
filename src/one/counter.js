import  {useState} from "react"

function Counter(){
    const [count,setCount]=useState(0)
    function incrementClick(){
        console.log("increament button click happens")
        console.log("count is ",count+1)
        setCount(count+1)
    }
    function decreamentClick(){
        console.log("decreament button click happens")
        console.log("count is ",count)
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={decreamentClick}>decrement</button>
            <div>{count}</div>
            <button  onClick={incrementClick}>increment</button>
        </div>
    )
}export default Counter