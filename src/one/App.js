import ComponentA from "./componentA";
import ComponentD from "./componentD";
import { useDispatch, useSelector } from "react-redux";
import { increment ,decrement} from "../features/counter/counterSlice";



function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch=useDispatch()
  console.log("count which is coming from reduser is",count)

  function incrementReduxValue(){
    console.log("button click")
    dispatch(increment())
  }
  function decrementReduxValue(){
    console.log("button click")
    dispatch(decrement())
  }



  return (
  
    <div className=" bg-white p-10 text-black">
      <div className='text-red'>the value which is coming from reducer is {count}</div>
      <br></br> 
      <button onClick={incrementReduxValue} >increment</button>
      <br></br><br></br>
      <button onClick={decrementReduxValue}>decrement</button>
      <br></br>
    <ComponentA />
    <br></br>
    <ComponentD  />
  
    </div>
  );
}

export default App;
